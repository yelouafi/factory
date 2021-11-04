/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  LibUtilityStorage,
  LibUtilityStorageInterface,
} from '../LibUtilityStorage'

const _abi = [
  {
    inputs: [],
    name: 'STORAGE_SLOT',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'c__0xa7c4ff02',
        type: 'bytes32',
      },
    ],
    name: 'c_0xa7c4ff02',
    outputs: [],
    stateMutability: 'pure',
    type: 'function',
  },
]

const _bytecode =
  '0x61016e610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c806312dfb81114610045578063517d217e14610061575b600080fd5b61005f600480360381019061005a91906100e1565b61007f565b005b610069610082565b604051610076919061011d565b60405180910390f35b50565b7f75bce7b27cc8f04e7a4282e725010cbd105f602d082c4b02f7d958135d62562e81565b600080fd5b6000819050919050565b6100be816100ab565b81146100c957600080fd5b50565b6000813590506100db816100b5565b92915050565b6000602082840312156100f7576100f66100a6565b5b6000610105848285016100cc565b91505092915050565b610117816100ab565b82525050565b6000602082019050610132600083018461010e565b9291505056fea2646970667358221220fc1d025507dd4b5e3a4e1d6a5c8a777058b80a6a1d375a2dc76b307008ca785664736f6c63430008090033'

type LibUtilityStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: LibUtilityStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class LibUtilityStorage__factory extends ContractFactory {
  constructor(...args: LibUtilityStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibUtilityStorage> {
    return super.deploy(overrides || {}) as Promise<LibUtilityStorage>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): LibUtilityStorage {
    return super.attach(address) as LibUtilityStorage
  }
  connect(signer: Signer): LibUtilityStorage__factory {
    return super.connect(signer) as LibUtilityStorage__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): LibUtilityStorageInterface {
    return new utils.Interface(_abi) as LibUtilityStorageInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibUtilityStorage {
    return new Contract(address, _abi, signerOrProvider) as LibUtilityStorage
  }
}