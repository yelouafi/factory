/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OnCyberScenesFacet,
  OnCyberScenesFacetInterface,
} from "../OnCyberScenesFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_trustedForwarder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_opensea",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "minterNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506121a4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c8063481c6a751161008c578063a22cb46511610066578063a22cb46514610223578063e985e9c514610236578063f242432a14610249578063f34822b41461025c57600080fd5b8063481c6a751461019a5780634e1273f4146101c2578063572b6c05146101e257600080fd5b806310662e91116100c857806310662e911461015757806318160ddd1461016a5780631b023947146101725780632eb2c2d61461018557600080fd5b8062fdd58e146100ee57806301ffc9a7146101145780630e89341c14610137575b600080fd5b6101016100fc366004611a07565b61026f565b6040519081526020015b60405180910390f35b610127610122366004611afb565b610315565b604051901515815260200161010b565b61014a610145366004611c0a565b610358565b60405161010b9190611e5d565b610101610165366004611ba0565b6104b1565b6101016106f9565b610101610180366004611871565b610717565b6101986101933660046118c4565b610754565b005b60008051602061212f833981519152546040516001600160a01b03909116815260200161010b565b6101d56101d0366004611a30565b6107a1565b60405161010b9190611e25565b6101276101f0366004611871565b7fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae993546001600160a01b0390811691161490565b6101986102313660046119cd565b6109e7565b610127610244366004611892565b610add565b61019861025736600461196a565b610b2a565b61019861026a366004611b33565b610b70565b60006001600160a01b0383166102e05760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b60008051602061214f8339815191526000928352602090815260408084206001600160a01b0395909516845293905250205490565b6001600160e01b0319811660009081527f326d0c59a7612f6a9919e2a8ee333c80ba689d8ba2634de89c85cbb04832e705602052604081205460ff165b92915050565b60008181527fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c83602052604081208054606092919061039590611fc5565b80601f01602080910402602001604051908101604052809291908181526020018280546103c190611fc5565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b505050505090508051600014156104675760405162461bcd60e51b815260206004820152601d60248201527f455243313135355552493a20746f6b656e4964206e6f7420657869737400000060448201526064016102d7565b60405161049a907fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c84908390602001611ce5565b604051602081830303815290604052915050919050565b6000806104bc610cc9565b905060006104c982610717565b90506000868683856040516020016104e49493929190611ca4565b6040516020818303038152906040529050600061055f8661055984805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90610d1f565b905060008051602061212f833981519152546001600160a01b038281169116146105b05760405162461bcd60e51b81526020600482015260026024820152614e4d60f01b60448201526064016102d7565b6105ca60008051602061212f8339815191525b6002015490565b94506105d68589610dd5565b7f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a60805460010190556001600160a01b03841660009081527f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a61602052604090208054600101905561065784868960405180602001604052806000815250610e18565b8685856001600160a01b03167f25b428dfde728ccfaddad7e29e4ac23c24ed7fd1a6e3e3f91894a9a073f5dfff60405160405180910390a46106b48460008051602061212f833981519152600101546001600160a01b0316610add565b6106ee577f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a5f546106ee906001600160a01b031660016109e7565b505050509392505050565b600061071260008051602061212f8339815191526105c3565b905090565b6001600160a01b03811660009081527f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a616020526040812054610352565b6001600160a01b03851633148061077057506107708533610add565b61078c5760405162461bcd60e51b81526004016102d790611eb8565b61079a338686868686610e39565b5050505050565b606081518351146108065760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016102d7565b825160008051602061214f8339815191529060009067ffffffffffffffff81111561084157634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561086a578160200160208202803683370190505b50905060005b85518110156109de5760006001600160a01b03168682815181106108a457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316141561091d5760405162461bcd60e51b815260206004820152603160248201527f455243313135353a2062617463682062616c616e636520717565727920666f7260448201527020746865207a65726f206164647265737360781b60648201526084016102d7565b82600086838151811061094057634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600087838151811061097857634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020548282815181106109c157634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806109d68161202d565b915050610870565b50949350505050565b336001600160a01b0383161415610a525760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016102d7565b3360008181527f1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b0391821660009081527f1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68c6020908152604080832093909416825291909152205460ff1690565b6001600160a01b038516331480610b465750610b468533610add565b610b625760405162461bcd60e51b81526004016102d790611eb8565b61079a338686868686610e5d565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b03163314610bce5760405162461bcd60e51b81526020600482015260026024820152614e4f60f01b60448201526064016102d7565b7fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae99380546001600160a01b0319166001600160a01b038416179055636cdb3d1360e11b6000527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f6020527f845f7f8d885943dffdc1524acbd9538b2923f93aad26d306df3b8982c7f0632d805460ff19166001179055610c6c84610e79565b60008051602061212f83398151915280546001600160a01b039485166001600160a01b0319918216179091557f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a5f8054929094169116179091555050565b600060183610801590610d0557507fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae993546001600160a01b031633145b15610d17575060131936013560601c90565b503390565b90565b600080600080845160411415610d495750505060208201516040830151606084015160001a610dbf565b845160401415610d775750505060408201516020830151906001600160ff1b0381169060ff1c601b01610dbf565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102d7565b610dcb86828585610eaf565b9695505050505050565b60008281527fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c83602090815260409091208251610e13928401906116d9565b505050565b610e2733600086868686611058565b610e33848484846111cc565b50505050565b610e478686868686866112db565b610e558686868686866113a5565b505050505050565b610e6b868686868686611058565b610e55868686868686611587565b8051610eab907fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c849060208401906116d9565b5050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610f2c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102d7565b8360ff16601b1480610f4157508360ff16601c145b610f985760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016102d7565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015610fec573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661104f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016102d7565b95945050505050565b6001600160a01b0384163b15610e555760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061109c9089908990889088908890600401611de0565b602060405180830381600087803b1580156110b657600080fd5b505af19250505080156110e6575060408051601f3d908101601f191682019092526110e391810190611b17565b60015b611193576110f2612074565b806308c379a0141561112c575061110761208b565b80611112575061112e565b8060405162461bcd60e51b81526004016102d79190611e5d565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016102d7565b6001600160e01b0319811663f23a6e6160e01b146111c35760405162461bcd60e51b81526004016102d790611e70565b50505050505050565b6001600160a01b03841661122c5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016102d7565b6112453360008661123c87611680565b61079a87611680565b600083815260008051602061214f833981519152602090815260408083206001600160a01b0388168452918290528220805491928592611286908490611f6a565b909155505060408051858152602081018590526001600160a01b0387169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6001600160a01b0384163b15610e555760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061131f9089908990889088908890600401611d82565b602060405180830381600087803b15801561133957600080fd5b505af1925050508015611369575060408051601f3d908101601f1916820190925261136691810190611b17565b60015b611375576110f2612074565b6001600160e01b0319811663bc197c8160e01b146111c35760405162461bcd60e51b81526004016102d790611e70565b6001600160a01b0384166113cb5760405162461bcd60e51b81526004016102d790611f01565b815183511461142d5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016102d7565b60008051602061214f83398151915260005b845181101561152657600085828151811061146a57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600085838151811061149657634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815286835260408082206001600160a01b038e1683529093529182208054919350839290916114d5908490611f82565b90915550506000828152602085815260408083206001600160a01b038c1684529091528120805483929061150a908490611f6a565b925050819055505050808061151e9061202d565b91505061143f565b50846001600160a01b0316866001600160a01b0316886001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611576929190611e38565b60405180910390a450505050505050565b6001600160a01b0384166115ad5760405162461bcd60e51b81526004016102d790611f01565b6115bc86868661123c87611680565b600083815260008051602061214f833981519152602081815260408084206001600160a01b038a16855290915282208054919285926115fc908490611f82565b90915550506000848152602082815260408083206001600160a01b038916845290915281208054859290611631908490611f6a565b909155505060408051858152602081018590526001600160a01b038088169289821692918b16917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611576565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106116c857634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b8280546116e590611fc5565b90600052602060002090601f016020900481019282611707576000855561174d565b82601f1061172057805160ff191683800117855561174d565b8280016001018555821561174d579182015b8281111561174d578251825591602001919060010190611732565b5061175992915061175d565b5090565b5b80821115611759576000815560010161175e565b80356001600160a01b038116811461178957600080fd5b919050565b600082601f83011261179e578081fd5b813560206117ab82611f46565b6040516117b88282612000565b8381528281019150858301600585901b870184018810156117d7578586fd5b855b858110156117f5578135845292840192908401906001016117d9565b5090979650505050505050565b600082601f830112611812578081fd5b813567ffffffffffffffff81111561182c5761182c61205e565b604051611843601f8301601f191660200182612000565b818152846020838601011115611857578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611882578081fd5b61188b82611772565b9392505050565b600080604083850312156118a4578081fd5b6118ad83611772565b91506118bb60208401611772565b90509250929050565b600080600080600060a086880312156118db578081fd5b6118e486611772565b94506118f260208701611772565b9350604086013567ffffffffffffffff8082111561190e578283fd5b61191a89838a0161178e565b9450606088013591508082111561192f578283fd5b61193b89838a0161178e565b93506080880135915080821115611950578283fd5b5061195d88828901611802565b9150509295509295909350565b600080600080600060a08688031215611981578081fd5b61198a86611772565b945061199860208701611772565b93506040860135925060608601359150608086013567ffffffffffffffff8111156119c1578182fd5b61195d88828901611802565b600080604083850312156119df578182fd5b6119e883611772565b9150602083013580151581146119fc578182fd5b809150509250929050565b60008060408385031215611a19578182fd5b611a2283611772565b946020939093013593505050565b60008060408385031215611a42578182fd5b823567ffffffffffffffff80821115611a59578384fd5b818501915085601f830112611a6c578384fd5b81356020611a7982611f46565b604051611a868282612000565b8381528281019150858301600585901b870184018b1015611aa5578889fd5b8896505b84871015611ace57611aba81611772565b835260019690960195918301918301611aa9565b5096505086013592505080821115611ae4578283fd5b50611af18582860161178e565b9150509250929050565b600060208284031215611b0c578081fd5b813561188b81612115565b600060208284031215611b28578081fd5b815161188b81612115565b60008060008060808587031215611b48578182fd5b843567ffffffffffffffff811115611b5e578283fd5b611b6a87828801611802565b945050611b7960208601611772565b9250611b8760408601611772565b9150611b9560608601611772565b905092959194509250565b600080600060608486031215611bb4578081fd5b833567ffffffffffffffff80821115611bcb578283fd5b611bd787838801611802565b9450602086013593506040860135915080821115611bf3578283fd5b50611c0086828701611802565b9150509250925092565b600060208284031215611c1b578081fd5b5035919050565b6000815180845260208085019450808401835b83811015611c5157815187529582019590820190600101611c35565b509495945050505050565b60008151808452611c74816020860160208601611f99565b601f01601f19169290920160200192915050565b60008151611c9a818560208601611f99565b9290920192915050565b60008551611cb6818460208a01611f99565b9190910193845250602083019190915260601b6bffffffffffffffffffffffff19166040820152605401919050565b600080845482600182811c915080831680611d0157607f831692505b6020808410821415611d2157634e487b7160e01b87526022600452602487fd5b818015611d355760018114611d4657611d72565b60ff19861689528489019650611d72565b60008b815260209020885b86811015611d6a5781548b820152908501908301611d51565b505084890196505b50505050505061104f8185611c88565b6001600160a01b0386811682528516602082015260a060408201819052600090611dae90830186611c22565b8281036060840152611dc08186611c22565b90508281036080840152611dd48185611c5c565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090611e1a90830184611c5c565b979650505050505050565b60208152600061188b6020830184611c22565b604081526000611e4b6040830185611c22565b828103602084015261104f8185611c22565b60208152600061188b6020830184611c5c565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b600067ffffffffffffffff821115611f6057611f6061205e565b5060051b60200190565b60008219821115611f7d57611f7d612048565b500190565b600082821015611f9457611f94612048565b500390565b60005b83811015611fb4578181015183820152602001611f9c565b83811115610e335750506000910152565b600181811c90821680611fd957607f821691505b60208210811415611ffa57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff811182821017156120265761202661205e565b6040525050565b600060001982141561204157612041612048565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d1115610d1c57600481823e5160e01c90565b600060443d10156120995790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156120c957505050505090565b82850191508151818111156120e15750505050505090565b843d87010160208285010111156120fb5750505050505090565b61210a60208286010187612000565b509095945050505050565b6001600160e01b03198116811461212b57600080fd5b5056fe47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a5e1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68ba2646970667358221220dac5a5dc005897eefee339e1875e3d1924741257109cdb88572b09e7cffa8b2e64736f6c63430008040033";

export class OnCyberScenesFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OnCyberScenesFacet> {
    return super.deploy(overrides || {}) as Promise<OnCyberScenesFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OnCyberScenesFacet {
    return super.attach(address) as OnCyberScenesFacet;
  }
  connect(signer: Signer): OnCyberScenesFacet__factory {
    return super.connect(signer) as OnCyberScenesFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OnCyberScenesFacetInterface {
    return new utils.Interface(_abi) as OnCyberScenesFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OnCyberScenesFacet {
    return new Contract(address, _abi, signerOrProvider) as OnCyberScenesFacet;
  }
}
