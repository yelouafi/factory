/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseRelayRecipientStorage,
  BaseRelayRecipientStorageInterface,
} from "../BaseRelayRecipientStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x87d0536b",
        type: "bytes32",
      },
    ],
    name: "c_0x87d0536b",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60e7610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80635f6f5f36146038575b600080fd5b604e6004803603810190604a91906066565b6050565b005b50565b600081359050606081609d565b92915050565b60006020828403121560795760786098565b5b60006085848285016053565b91505092915050565b6000819050919050565b600080fd5b60a481608e565b811460ae57600080fd5b5056fea26469706673582212201e8ee00c1ca5be625d46212b0d49a03a1f0bf7222d656c6a26e9c9a2016476a564736f6c63430008050033";

export class BaseRelayRecipientStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseRelayRecipientStorage> {
    return super.deploy(overrides || {}) as Promise<BaseRelayRecipientStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseRelayRecipientStorage {
    return super.attach(address) as BaseRelayRecipientStorage;
  }
  connect(signer: Signer): BaseRelayRecipientStorage__factory {
    return super.connect(signer) as BaseRelayRecipientStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseRelayRecipientStorageInterface {
    return new utils.Interface(_abi) as BaseRelayRecipientStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseRelayRecipientStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseRelayRecipientStorage;
  }
}
