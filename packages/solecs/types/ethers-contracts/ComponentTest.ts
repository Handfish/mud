/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ComponentTestInterface extends utils.Interface {
  contractName: "ComponentTest";
  functions: {
    "IS_TEST()": FunctionFragment;
    "failed()": FunctionFragment;
    "setUp()": FunctionFragment;
    "testGetEntities()": FunctionFragment;
    "testGetEntitiesWithValue()": FunctionFragment;
    "testRemove()": FunctionFragment;
    "testSetAndGetValue()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(functionFragment: "testGetEntities", values?: undefined): string;
  encodeFunctionData(functionFragment: "testGetEntitiesWithValue", values?: undefined): string;
  encodeFunctionData(functionFragment: "testRemove", values?: undefined): string;
  encodeFunctionData(functionFragment: "testSetAndGetValue", values?: undefined): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "testGetEntities", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "testGetEntitiesWithValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "testRemove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "testSetAndGetValue", data: BytesLike): Result;

  events: {
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export type logEvent = TypedEvent<[string], { arg0: string }>;

export type logEventFilter = TypedEventFilter<logEvent>;

export type log_addressEvent = TypedEvent<[string], { arg0: string }>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export type log_bytesEvent = TypedEvent<[string], { arg0: string }>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export type log_bytes32Event = TypedEvent<[string], { arg0: string }>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export type log_intEvent = TypedEvent<[BigNumber], { arg0: BigNumber }>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export type log_named_addressEvent = TypedEvent<[string, string], { key: string; val: string }>;

export type log_named_addressEventFilter = TypedEventFilter<log_named_addressEvent>;

export type log_named_bytesEvent = TypedEvent<[string, string], { key: string; val: string }>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export type log_named_bytes32Event = TypedEvent<[string, string], { key: string; val: string }>;

export type log_named_bytes32EventFilter = TypedEventFilter<log_named_bytes32Event>;

export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { key: string; val: BigNumber; decimals: BigNumber }
>;

export type log_named_decimal_intEventFilter = TypedEventFilter<log_named_decimal_intEvent>;

export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { key: string; val: BigNumber; decimals: BigNumber }
>;

export type log_named_decimal_uintEventFilter = TypedEventFilter<log_named_decimal_uintEvent>;

export type log_named_intEvent = TypedEvent<[string, BigNumber], { key: string; val: BigNumber }>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export type log_named_stringEvent = TypedEvent<[string, string], { key: string; val: string }>;

export type log_named_stringEventFilter = TypedEventFilter<log_named_stringEvent>;

export type log_named_uintEvent = TypedEvent<[string, BigNumber], { key: string; val: BigNumber }>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export type log_stringEvent = TypedEvent<[string], { arg0: string }>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export type log_uintEvent = TypedEvent<[BigNumber], { arg0: BigNumber }>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export type logsEvent = TypedEvent<[string], { arg0: string }>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface ComponentTest extends BaseContract {
  contractName: "ComponentTest";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComponentTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    failed(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setUp(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    testGetEntities(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    testGetEntitiesWithValue(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    testRemove(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    testSetAndGetValue(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;
  };

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  failed(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setUp(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  testGetEntities(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  testGetEntitiesWithValue(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  testRemove(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  testSetAndGetValue(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    setUp(overrides?: CallOverrides): Promise<void>;

    testGetEntities(overrides?: CallOverrides): Promise<void>;

    testGetEntitiesWithValue(overrides?: CallOverrides): Promise<void>;

    testRemove(overrides?: CallOverrides): Promise<void>;

    testSetAndGetValue(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(key?: null, val?: null): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_bytes(string,bytes)"(key?: null, val?: null): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(key?: null, val?: null): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(key?: null, val?: null): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(key?: null, val?: null): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(key?: null, val?: null): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    failed(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setUp(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    testGetEntities(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    testGetEntitiesWithValue(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    testRemove(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    testSetAndGetValue(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setUp(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    testGetEntities(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    testGetEntitiesWithValue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testRemove(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    testSetAndGetValue(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;
  };
}
