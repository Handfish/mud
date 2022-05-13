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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface WorldInterface extends utils.Interface {
  contractName: "World";
  functions: {
    "getComponent(uint256)": FunctionFragment;
    "getComponentIdFromAddress(address)": FunctionFragment;
    "getNumEntities()": FunctionFragment;
    "hasEntity(uint256)": FunctionFragment;
    "registerComponent(address,uint256)": FunctionFragment;
    "registerComponentValueRemoved(address,uint256)": FunctionFragment;
    "registerComponentValueSet(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getComponent", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "getComponentIdFromAddress", values: [string]): string;
  encodeFunctionData(functionFragment: "getNumEntities", values?: undefined): string;
  encodeFunctionData(functionFragment: "hasEntity", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "registerComponent", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "registerComponentValueRemoved", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "registerComponentValueSet", values: [string, BigNumberish, BytesLike]): string;

  decodeFunctionResult(functionFragment: "getComponent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getComponentIdFromAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNumEntities", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasEntity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registerComponent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registerComponentValueRemoved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registerComponentValueSet", data: BytesLike): Result;

  events: {
    "ComponentRegistered(uint256,address)": EventFragment;
    "ComponentValueRemoved(uint256,address,uint256)": EventFragment;
    "ComponentValueSet(uint256,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ComponentRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ComponentValueRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ComponentValueSet"): EventFragment;
}

export type ComponentRegisteredEvent = TypedEvent<[BigNumber, string], { componentId: BigNumber; component: string }>;

export type ComponentRegisteredEventFilter = TypedEventFilter<ComponentRegisteredEvent>;

export type ComponentValueRemovedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { componentId: BigNumber; component: string; entity: BigNumber }
>;

export type ComponentValueRemovedEventFilter = TypedEventFilter<ComponentValueRemovedEvent>;

export type ComponentValueSetEvent = TypedEvent<
  [BigNumber, string, BigNumber, string],
  { componentId: BigNumber; component: string; entity: BigNumber; data: string }
>;

export type ComponentValueSetEventFilter = TypedEventFilter<ComponentValueSetEvent>;

export interface World extends BaseContract {
  contractName: "World";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WorldInterface;

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
    getComponent(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getComponentIdFromAddress(componentAddr: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getNumEntities(overrides?: CallOverrides): Promise<[BigNumber]>;

    hasEntity(entity: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    registerComponent(
      componentAddr: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerComponentValueRemoved(
      component: string,
      entity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerComponentValueSet(
      component: string,
      entity: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getComponent(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getComponentIdFromAddress(componentAddr: string, overrides?: CallOverrides): Promise<BigNumber>;

  getNumEntities(overrides?: CallOverrides): Promise<BigNumber>;

  hasEntity(entity: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  registerComponent(
    componentAddr: string,
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerComponentValueRemoved(
    component: string,
    entity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerComponentValueSet(
    component: string,
    entity: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getComponent(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getComponentIdFromAddress(componentAddr: string, overrides?: CallOverrides): Promise<BigNumber>;

    getNumEntities(overrides?: CallOverrides): Promise<BigNumber>;

    hasEntity(entity: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    registerComponent(componentAddr: string, id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    registerComponentValueRemoved(component: string, entity: BigNumberish, overrides?: CallOverrides): Promise<void>;

    registerComponentValueSet(
      component: string,
      entity: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ComponentRegistered(uint256,address)"(
      componentId?: BigNumberish | null,
      component?: null
    ): ComponentRegisteredEventFilter;
    ComponentRegistered(componentId?: BigNumberish | null, component?: null): ComponentRegisteredEventFilter;

    "ComponentValueRemoved(uint256,address,uint256)"(
      componentId?: BigNumberish | null,
      component?: string | null,
      entity?: BigNumberish | null
    ): ComponentValueRemovedEventFilter;
    ComponentValueRemoved(
      componentId?: BigNumberish | null,
      component?: string | null,
      entity?: BigNumberish | null
    ): ComponentValueRemovedEventFilter;

    "ComponentValueSet(uint256,address,uint256,bytes)"(
      componentId?: BigNumberish | null,
      component?: string | null,
      entity?: BigNumberish | null,
      data?: null
    ): ComponentValueSetEventFilter;
    ComponentValueSet(
      componentId?: BigNumberish | null,
      component?: string | null,
      entity?: BigNumberish | null,
      data?: null
    ): ComponentValueSetEventFilter;
  };

  estimateGas: {
    getComponent(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getComponentIdFromAddress(componentAddr: string, overrides?: CallOverrides): Promise<BigNumber>;

    getNumEntities(overrides?: CallOverrides): Promise<BigNumber>;

    hasEntity(entity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    registerComponent(
      componentAddr: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerComponentValueRemoved(
      component: string,
      entity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerComponentValueSet(
      component: string,
      entity: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getComponent(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getComponentIdFromAddress(componentAddr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumEntities(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasEntity(entity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerComponent(
      componentAddr: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerComponentValueRemoved(
      component: string,
      entity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerComponentValueSet(
      component: string,
      entity: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
