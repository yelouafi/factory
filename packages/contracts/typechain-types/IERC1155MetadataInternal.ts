/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common'

export interface IERC1155MetadataInternalInterface
  extends ethers.utils.Interface {
  functions: {}

  events: {
    'URI(string,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'URI'): EventFragment
}

export type URIEvent = TypedEvent<
  [string, BigNumber],
  { value: string; tokenId: BigNumber }
>

export type URIEventFilter = TypedEventFilter<URIEvent>

export interface IERC1155MetadataInternal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: IERC1155MetadataInternalInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {}

  callStatic: {}

  filters: {
    'URI(string,uint256)'(
      value?: null,
      tokenId?: BigNumberish | null
    ): URIEventFilter
    URI(value?: null, tokenId?: BigNumberish | null): URIEventFilter
  }

  estimateGas: {}

  populateTransaction: {}
}