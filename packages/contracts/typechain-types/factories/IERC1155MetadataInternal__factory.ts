/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC1155MetadataInternal,
  IERC1155MetadataInternalInterface,
} from "../IERC1155MetadataInternal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
];

export class IERC1155MetadataInternal__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155MetadataInternalInterface {
    return new utils.Interface(_abi) as IERC1155MetadataInternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155MetadataInternal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1155MetadataInternal;
  }
}
