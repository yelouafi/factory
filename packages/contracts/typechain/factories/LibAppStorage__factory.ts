/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibAppStorage, LibAppStorageInterface } from "../LibAppStorage";

const _abi = [
  {
    inputs: [],
    name: "STORAGE_SLOT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x0ff4911f",
        type: "bytes32",
      },
    ],
    name: "c_0x0ff4911f",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61016e610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063517d217e1461004557806357104bb614610063575b600080fd5b61004d61007f565b60405161005a91906100f7565b60405180910390f35b61007d600480360381019061007891906100bb565b6100a3565b005b7f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a5e81565b50565b6000813590506100b581610121565b92915050565b6000602082840312156100d1576100d061011c565b5b60006100df848285016100a6565b91505092915050565b6100f181610112565b82525050565b600060208201905061010c60008301846100e8565b92915050565b6000819050919050565b600080fd5b61012a81610112565b811461013557600080fd5b5056fea2646970667358221220be7736d2e5fc355153db20a0446ec1442a683d6d85d12b30d0b51f2010a57f4164736f6c63430008070033";

export class LibAppStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibAppStorage> {
    return super.deploy(overrides || {}) as Promise<LibAppStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibAppStorage {
    return super.attach(address) as LibAppStorage;
  }
  connect(signer: Signer): LibAppStorage__factory {
    return super.connect(signer) as LibAppStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibAppStorageInterface {
    return new utils.Interface(_abi) as LibAppStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibAppStorage {
    return new Contract(address, _abi, signerOrProvider) as LibAppStorage;
  }
}
