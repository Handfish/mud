/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type RectangleStruct = {
  cx: BigNumberish;
  cy: BigNumberish;
  w: BigNumberish;
  h: BigNumberish;
  westEdge: BigNumberish;
  eastEdge: BigNumberish;
  northEdge: BigNumberish;
  southEdge: BigNumberish;
};

export type RectangleStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  cx: BigNumber;
  cy: BigNumber;
  w: BigNumber;
  h: BigNumber;
  westEdge: BigNumber;
  eastEdge: BigNumber;
  northEdge: BigNumber;
  southEdge: BigNumber;
};

export type NodeStruct = {
  maxPoints: BigNumberish;
  depth: BigNumberish;
  points: BigNumberish[];
  children: BigNumberish[];
  bounds: RectangleStruct;
  divided: boolean;
};

export type NodeStructOutput = [number, number, BigNumber[], BigNumber[], RectangleStructOutput, boolean] & {
  maxPoints: number;
  depth: number;
  points: BigNumber[];
  children: BigNumber[];
  bounds: RectangleStructOutput;
  divided: boolean;
};

export type PointStruct = {
  x: BigNumberish;
  y: BigNumberish;
  entityID: BigNumberish;
  parentNode: BigNumberish;
};

export type PointStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
  x: BigNumber;
  y: BigNumber;
  entityID: BigNumber;
  parentNode: BigNumber;
};

export interface PublicQuadtreeIndexerInterface extends utils.Interface {
  contractName: "PublicQuadtreeIndexer";
  functions: {
    "getEntities()": FunctionFragment;
    "getEntitiesWithValue(bytes)": FunctionFragment;
    "getNode(uint256)": FunctionFragment;
    "getPoint(uint256)": FunctionFragment;
    "has(uint256)": FunctionFragment;
    "initRectangle(int64,int64,uint64,uint64)": FunctionFragment;
    "insert(uint256,(int64,int64,uint256,uint256))": FunctionFragment;
    "printRect((int64,int64,uint64,uint64,int64,int64,int64,int64))": FunctionFragment;
    "printTree(uint256)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "update(uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getEntities", values?: undefined): string;
  encodeFunctionData(functionFragment: "getEntitiesWithValue", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "getNode", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "getPoint", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "has", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "initRectangle",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "insert", values: [BigNumberish, PointStruct]): string;
  encodeFunctionData(functionFragment: "printRect", values: [RectangleStruct]): string;
  encodeFunctionData(functionFragment: "printTree", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "remove", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "update", values: [BigNumberish, BytesLike]): string;

  decodeFunctionResult(functionFragment: "getEntities", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEntitiesWithValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "has", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initRectangle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "printRect", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "printTree", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export interface PublicQuadtreeIndexer extends BaseContract {
  contractName: "PublicQuadtreeIndexer";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PublicQuadtreeIndexerInterface;

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
    getEntities(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getEntitiesWithValue(value: BytesLike, overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getNode(id: BigNumberish, overrides?: CallOverrides): Promise<[NodeStructOutput]>;

    getPoint(id: BigNumberish, overrides?: CallOverrides): Promise<[PointStructOutput]>;

    has(entity: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    initRectangle(
      cx: BigNumberish,
      cy: BigNumberish,
      w: BigNumberish,
      h: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[RectangleStructOutput] & { rect: RectangleStructOutput }>;

    insert(
      id: BigNumberish,
      point: PointStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    printRect(rect: RectangleStruct, overrides?: CallOverrides): Promise<[void]>;

    printTree(id: BigNumberish, overrides?: CallOverrides): Promise<[void]>;

    remove(
      entity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    update(
      entity: BigNumberish,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;

  getEntitiesWithValue(value: BytesLike, overrides?: CallOverrides): Promise<BigNumber[]>;

  getNode(id: BigNumberish, overrides?: CallOverrides): Promise<NodeStructOutput>;

  getPoint(id: BigNumberish, overrides?: CallOverrides): Promise<PointStructOutput>;

  has(entity: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  initRectangle(
    cx: BigNumberish,
    cy: BigNumberish,
    w: BigNumberish,
    h: BigNumberish,
    overrides?: CallOverrides
  ): Promise<RectangleStructOutput>;

  insert(
    id: BigNumberish,
    point: PointStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  printRect(rect: RectangleStruct, overrides?: CallOverrides): Promise<void>;

  printTree(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

  remove(
    entity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  update(
    entity: BigNumberish,
    value: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;

    getEntitiesWithValue(value: BytesLike, overrides?: CallOverrides): Promise<BigNumber[]>;

    getNode(id: BigNumberish, overrides?: CallOverrides): Promise<NodeStructOutput>;

    getPoint(id: BigNumberish, overrides?: CallOverrides): Promise<PointStructOutput>;

    has(entity: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    initRectangle(
      cx: BigNumberish,
      cy: BigNumberish,
      w: BigNumberish,
      h: BigNumberish,
      overrides?: CallOverrides
    ): Promise<RectangleStructOutput>;

    insert(id: BigNumberish, point: PointStruct, overrides?: CallOverrides): Promise<boolean>;

    printRect(rect: RectangleStruct, overrides?: CallOverrides): Promise<void>;

    printTree(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    remove(entity: BigNumberish, overrides?: CallOverrides): Promise<void>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    update(entity: BigNumberish, value: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getEntities(overrides?: CallOverrides): Promise<BigNumber>;

    getEntitiesWithValue(value: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getNode(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getPoint(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    has(entity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    initRectangle(
      cx: BigNumberish,
      cy: BigNumberish,
      w: BigNumberish,
      h: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    insert(
      id: BigNumberish,
      point: PointStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    printRect(rect: RectangleStruct, overrides?: CallOverrides): Promise<BigNumber>;

    printTree(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    remove(entity: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    update(
      entity: BigNumberish,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEntities(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntitiesWithValue(value: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNode(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoint(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    has(entity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initRectangle(
      cx: BigNumberish,
      cy: BigNumberish,
      w: BigNumberish,
      h: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    insert(
      id: BigNumberish,
      point: PointStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    printRect(rect: RectangleStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    printTree(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      entity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      entity: BigNumberish,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
