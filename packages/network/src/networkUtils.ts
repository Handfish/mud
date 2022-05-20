import * as ethers from "ethers";
import { callWithRetry, range, sleep } from "@mud/utils";
import { resolveProperties } from "ethers/lib/utils";
import { ContractTopics, ContractEvent } from "./createContractsEventStream";
import { Contracts } from "./types";
import { getEmptyPromise } from "./utils";

export async function ensureNetworkIsUp(
  provider: ethers.providers.JsonRpcProvider,
  wssProvider?: ethers.providers.WebSocketProvider
): Promise<void> {
  const networkInfoPromise = () => {
    return Promise.all([provider.getBlockNumber(), wssProvider ? wssProvider.getBlockNumber() : getEmptyPromise()]);
  };
  await callWithRetry(networkInfoPromise, [], 10, 1000);
  return;
}

export async function fetchBlock(
  provider: ethers.providers.JsonRpcProvider,
  requireMinimumBlockNumber?: number
): Promise<ethers.providers.Block> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ of range(10)) {
    const blockPromise = async () => {
      const rawBlock = await provider.perform("getBlock", {
        includeTransactions: false,
        blockTag: provider.formatter.blockTag(await provider._getBlockTag("latest")),
      });
      return provider.formatter.block(rawBlock);
    };
    const block = await callWithRetry<ethers.providers.Block>(blockPromise, [], 10, 1000);
    if (requireMinimumBlockNumber && block.number < requireMinimumBlockNumber) {
      await sleep(300);
      continue;
    } else {
      return block;
    }
  }
  throw new Error("Could not fetch a block with blockNumber " + requireMinimumBlockNumber);
}

export async function fetchLogs<C extends Contracts>(
  provider: ethers.providers.JsonRpcProvider,
  topics: ContractTopics<C>[],
  startBlockNumber: number,
  endBlockNumber: number,
  contracts: C,
  requireMinimumBlockNumber?: number
): Promise<Array<ethers.providers.Log>> {
  const getLogPromise = async (contractAddress: string, topics: string[][]): Promise<Array<ethers.providers.Log>> => {
    const params = await resolveProperties({
      filter: provider._getFilter({
        fromBlock: startBlockNumber, // inclusive
        toBlock: endBlockNumber, // inclusive
        address: contractAddress,
        topics: topics,
      }),
    });
    const logs: Array<ethers.providers.Log> = await provider.perform("getLogs", params);
    logs.forEach((log) => {
      if (log.removed == null) {
        log.removed = false;
      }
    });
    return ethers.providers.Formatter.arrayOf(provider.formatter.filterLog.bind(provider.formatter))(logs);
  };

  const blockPromise = async () => {
    const _blockNumber = await provider.perform("getBlockNumber", {});
    const blockNumber = ethers.BigNumber.from(_blockNumber).toNumber();
    return blockNumber;
  };

  const getLogPromises = () => {
    const logPromises: Array<Promise<Array<ethers.providers.Log>>> = [];
    for (const [k, c] of Object.entries(contracts)) {
      const topicsForContract = topics.find((t) => t.key === k)?.topics;
      if (topicsForContract) {
        logPromises.push(getLogPromise(c.address, topicsForContract));
      }
    }
    return logPromises;
  };

  if (requireMinimumBlockNumber) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ in range(10)) {
      const call = () => Promise.all([blockPromise(), ...getLogPromises()]);
      const [blockNumber, logs] = await callWithRetry<[number, ...Array<Array<ethers.providers.Log>>]>(
        call,
        [],
        10,
        1000
      );
      if (blockNumber < requireMinimumBlockNumber) {
        await sleep(500);
      } else {
        return logs.flat();
      }
    }
    throw new Error("Could not fetch logs with a required minimum block number");
  } else {
    const call = () => Promise.all([...getLogPromises()]);
    const logs = await callWithRetry<Array<Array<ethers.providers.Log>>>(call, [], 10, 1000);
    return logs.flat();
  }
}

export async function fetchEventsInBlockRange<C extends Contracts>(
  provider: ethers.providers.JsonRpcProvider,
  topics: ContractTopics<C>[],
  startBlockNumber: number,
  endBlockNumber: number,
  contracts: C,
  supportsBatchQueries: boolean
): Promise<Array<ContractEvent<C>>> {
  console.log(`fetching from ${startBlockNumber} -> ${endBlockNumber}`);
  const logs: Array<ethers.providers.Log> = await fetchLogs(
    provider,
    topics,
    startBlockNumber,
    endBlockNumber,
    contracts,
    supportsBatchQueries ? endBlockNumber : undefined
  );
  // we need to sort per block, transaction index, and log index
  logs.sort((a: ethers.providers.Log, b: ethers.providers.Log) => {
    if (a.blockNumber < b.blockNumber) {
      return -1;
    } else if (a.blockNumber > b.blockNumber) {
      return 1;
    } else {
      if (a.transactionIndex < b.transactionIndex) {
        return -1;
      } else if (a.transactionIndex > b.transactionIndex) {
        return 1;
      } else {
        return a.logIndex < b.logIndex ? -1 : 1;
      }
    }
  });

  // construct an object: address => keyof C
  const addressToContractKey: { [key in string]: keyof C } = {};
  for (const contractKey of Object.keys(contracts)) {
    addressToContractKey[contracts[contractKey].address] = contractKey;
  }

  // parse the logs to get the logs description, then turn them into contract events
  const contractEvents: Array<ContractEvent<C>> = [];

  for (let i = 0; i < logs.length; i++) {
    const log = logs[i];
    const contractKey = addressToContractKey[log.address];
    if (!contractKey) {
      throw new Error("This should not happen. An event's address is not part of the contracts dictionnary");
    }
    const contract = contracts[contractKey];
    try {
      const logDescription = contract.interface.parseLog(log);

      // Set a flag if this is the last event in this transaction
      const lastEventInTx = i === logs.length - 1 || logs[i + 1].transactionHash !== log.transactionHash;

      contractEvents.push({
        contractKey,
        eventKey: logDescription.name,
        args: logDescription.args,
        txHash: log.transactionHash,
        lastEventInTx,
      });
    } catch (e) {
      console.warn("A log couldn't be parsed with the corresponding contract interface!");
    }
  }

  return contractEvents;
}
