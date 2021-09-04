/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CyberDestinationUtilityFactoryFacet,
  CyberDestinationUtilityFactoryFacetInterface,
} from "../CyberDestinationUtilityFactoryFacet";

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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getDrop",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "time_start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time_end",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "share_oncyber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount_cap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minted",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "creator",
            type: "address",
          },
        ],
        internalType: "struct LibUtilityStorage.Drop",
        name: "",
        type: "tuple",
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
      {
        internalType: "address",
        name: "_oncyber",
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
        name: "_time_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_time_end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount_cap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_share_oncyber",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "mintEdition",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
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
    inputs: [],
    name: "oncyber",
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
  "0x608060405234801561001057600080fd5b5061295c806100206000396000f3fe6080604052600436106100fd5760003560e01c8063481c6a7511610095578063a22cb46511610064578063a22cb46514610350578063bc01188e14610370578063dcf2cad4146103ad578063e985e9c5146103cd578063f242432a146103ed57600080fd5b8063481c6a751461021c5780634e1273f41461025b578063572b6c05146102885780636787d449146102d657600080fd5b80630e89341c116100d15780630e89341c1461019a57806318160ddd146101c75780631b023947146101dc5780632eb2c2d6146101fc57600080fd5b8062fdd58e1461010257806301ffc9a71461013557806305322b74146101655780630b885ac314610178575b600080fd5b34801561010e57600080fd5b5061012261011d366004612098565b61040d565b6040519081526020015b60405180910390f35b34801561014157600080fd5b50610155610150366004612193565b610420565b604051901515815260200161012c565b6101556101733660046122e1565b610463565b34801561018457600080fd5b506101986101933660046121cd565b6106c5565b005b3480156101a657600080fd5b506101ba6101b53660046122e1565b61084e565b60405161012c919061255c565b3480156101d357600080fd5b506101226109a7565b3480156101e857600080fd5b506101226101f7366004611eff565b6109c8565b34801561020857600080fd5b50610198610217366004611f4d565b610a05565b34801561022857600080fd5b506000805160206128e7833981519152546001600160a01b03165b6040516001600160a01b03909116815260200161012c565b34801561026757600080fd5b5061027b6102763660046120c2565b610a52565b60405161012c9190612524565b34801561029457600080fd5b506101556102a3366004611eff565b7fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae993546001600160a01b0390811691161490565b3480156102e257600080fd5b506102f66102f13660046122e1565b610c48565b60405161012c9190815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201516001600160a01b03169181019190915260e00190565b34801561035c57600080fd5b5061019861036b36600461205c565b610d54565b34801561037c57600080fd5b507f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a62546001600160a01b0316610243565b3480156103b957600080fd5b506101226103c836600461224d565b610e4a565b3480156103d957600080fd5b506101556103e8366004611f1a565b611100565b3480156103f957600080fd5b50610198610408366004611ff7565b61114d565b60006104198383611193565b9392505050565b6001600160e01b0319811660009081527f326d0c59a7612f6a9919e2a8ee333c80ba689d8ba2634de89c85cbb04832e705602052604081205460ff165b92915050565b60008061046e611234565b60008481527f75bce7b27cc8f04e7a4282e725010cbd105f602d082c4b02f7d958135d62562e6020526040902080549192509042108015906104b4575080600101544211155b6104f35760405162461bcd60e51b815260206004820152600b60248201526a6f7574206f662074696d6560a81b60448201526064015b60405180910390fd5b806003015434146105375760405162461bcd60e51b815260206004820152600e60248201526d1a5b9d985b1a5908185b5bdd5b9d60921b60448201526064016104ea565b6004810154156105845780600401548160050154106105845760405162461bcd60e51b81526020600482015260096024820152680c6c2e040e4cac2c6d60bb1b60448201526064016104ea565b600181600501600082825461059991906126b4565b925050819055506105bc828560016040518060200160405280600081525061128a565b600184836001600160a01b03167f25b428dfde728ccfaddad7e29e4ac23c24ed7fd1a6e3e3f91894a9a073f5dfff60405160405180910390a46000606482600201543461060991906126ee565b61061391906126cc565b90506000610621823461270d565b60068401546040519192506001600160a01b03169082156108fc029083906000818181858888f1935050505015801561065e573d6000803e3d6000fd5b507f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a62546040516001600160a01b03909116906108fc8415029084906000818181858888f193505050501580156106b8573d6000803e3d6000fd5b5060019695505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031633146107235760405162461bcd60e51b81526020600482015260026024820152614e4f60f01b60448201526064016104ea565b7fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae99380546001600160a01b0319166001600160a01b038516179055636cdb3d1360e11b6000527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f6020527f845f7f8d885943dffdc1524acbd9538b2923f93aad26d306df3b8982c7f0632d805460ff191660011790556107c1856112ab565b6000805160206128e783398151915280546001600160a01b039586166001600160a01b0319918216179091557f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a5f8054938616938216939093179092557f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a628054919094169116179091555050565b60008181527fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c83602052604081208054606092919061088b90612750565b80601f01602080910402602001604051908101604052809291908181526020018280546108b790612750565b80156109045780601f106108d957610100808354040283529160200191610904565b820191906000526020600020905b8154815290600101906020018083116108e757829003601f168201915b5050505050905080516000141561095d5760405162461bcd60e51b815260206004820152601d60248201527f455243313135355552493a20746f6b656e4964206e6f7420657869737400000060448201526064016104ea565b604051610990907fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c849083906020016123da565b604051602081830303815290604052915050919050565b60006109c36000805160206128e78339815191525b6002015490565b905090565b6001600160a01b03811660009081527f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a61602052604081205461045d565b6001600160a01b038516331480610a215750610a218533611100565b610a3d5760405162461bcd60e51b81526004016104ea90612602565b610a4b3386868686866112e1565b5050505050565b60608151835114610ab75760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016104ea565b82516000805160206129078339815191529060009067ffffffffffffffff811115610ae457610ae4612815565b604051908082528060200260200182016040528015610b0d578160200160208202803683370190505b50905060005b8551811015610c3f5760006001600160a01b0316868281518110610b3957610b396127ff565b60200260200101516001600160a01b03161415610bb25760405162461bcd60e51b815260206004820152603160248201527f455243313135353a2062617463682062616c616e636520717565727920666f7260448201527020746865207a65726f206164647265737360781b60648201526084016104ea565b826000868381518110610bc757610bc76127ff565b602002602001015181526020019081526020016000206000878381518110610bf157610bf16127ff565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610c2c57610c2c6127ff565b6020908102919091010152600101610b13565b50949350505050565b610c916040518060e0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b60008281527f75bce7b27cc8f04e7a4282e725010cbd105f602d082c4b02f7d958135d62562e6020908152604091829020825160e08101845281548082526001830154938201939093526002820154938101939093526003810154606084015260048101546080840152600581015460a0840152600601546001600160a01b031660c083015261045d5760405162461bcd60e51b815260206004820152600e60248201526d191c9bdc081b9bdd08195e1a5cdd60921b60448201526064016104ea565b336001600160a01b0383161415610dbf5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016104ea565b3360008181527f1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600080610e55611234565b90506000610e62826109c8565b90506064851115610e9b5760405162461bcd60e51b815260206004820152600360248201526249534f60e81b60448201526064016104ea565b878910610ecf5760405162461bcd60e51b8152602060048201526002602482015261125560f21b60448201526064016104ea565b60008a8a8a8a8a8a8789604051602001610ef098979695949392919061237d565b60405160208183030381529060405290506000610f6b86610f6584805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90611305565b90506000805160206128e7833981519152546001600160a01b03828116911614610fbc5760405162461bcd60e51b81526020600482015260026024820152614e4d60f01b60448201526064016104ea565b610fd36000805160206128e78339815191526109bc565b9450610fdf858d611329565b7f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a60805460010190556001600160a01b03841660009081527f47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a61602052604090208054600101905550506040805160e081018252998a526020808b01998a528a820196875260608b0198895260808b01978852600060a08c018181526001600160a01b0395861660c08e019081528783527f75bce7b27cc8f04e7a4282e725010cbd105f602d082c4b02f7d958135d62562e9093529290209a518b55985160018b0155945160028a0155509451600388015592516004870155505160058501559151600690930180546001600160a01b0319169390911692909217909155919050565b6001600160a01b0391821660009081527f1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68c6020908152604080832093909416825291909152205460ff1690565b6001600160a01b03851633148061116957506111698533611100565b6111855760405162461bcd60e51b81526004016104ea90612602565b610a4b33868686868661136c565b60006001600160a01b0383166111ff5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084016104ea565b6000805160206129078339815191526000928352602090815260408084206001600160a01b0395909516845293905250205490565b60006018361080159061127057507fa5e014e253d3b66bd348c3cdd05f38b9805fff0b6471d004b58c6ada26cae993546001600160a01b031633145b15611282575060131936013560601c90565b503390565b90565b61129933600086868686611388565b6112a5848484846114fc565b50505050565b80516112dd907fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c84906020840190611d5f565b5050565b6112ef86868686868661160b565b6112fd8686868686866116d5565b505050505050565b600080600061131485856118b6565b9150915061132181611926565b509392505050565b60008281527fb3408a5d8f30170919d3996b6cc182726500ad24733d17ace2f621485f6e7c8360209081526040909120825161136792840190611d5f565b505050565b61137a868686868686611388565b6112fd868686868686611ae4565b6001600160a01b0384163b156112fd5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906113cc90899089908890889088906004016124df565b602060405180830381600087803b1580156113e657600080fd5b505af1925050508015611416575060408051601f3d908101601f19168201909252611413918101906121b0565b60015b6114c35761142261282b565b806308c379a0141561145c5750611437612846565b80611442575061145e565b8060405162461bcd60e51b81526004016104ea919061255c565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016104ea565b6001600160e01b0319811663f23a6e6160e01b146114f35760405162461bcd60e51b81526004016104ea9061256f565b50505050505050565b6001600160a01b03841661155c5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016104ea565b6115753360008661156c87611bf8565b610a4b87611bf8565b6000838152600080516020612907833981519152602090815260408083206001600160a01b03881684529182905282208054919285926115b69084906126b4565b909155505060408051858152602081018590526001600160a01b0387169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6001600160a01b0384163b156112fd5760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061164f9089908990889088908890600401612481565b602060405180830381600087803b15801561166957600080fd5b505af1925050508015611699575060408051601f3d908101601f19168201909252611696918101906121b0565b60015b6116a55761142261282b565b6001600160e01b0319811663bc197c8160e01b146114f35760405162461bcd60e51b81526004016104ea9061256f565b6001600160a01b0384166116fb5760405162461bcd60e51b81526004016104ea9061264b565b815183511461175d5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016104ea565b60008051602061290783398151915260005b845181101561185557600085828151811061178c5761178c6127ff565b6020026020010151905060008583815181106117aa576117aa6127ff565b602090810291909101810151600084815286835260408082206001600160a01b038e1683529093529190912054909150818110156117fa5760405162461bcd60e51b81526004016104ea906125b7565b6000838152602086815260408083206001600160a01b038e811685529252808320938590039093558a16815290812080548392906118399084906126b4565b925050819055505050808061184d906127b8565b91505061176f565b50846001600160a01b0316866001600160a01b0316886001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516118a5929190612537565b60405180910390a450505050505050565b6000808251604114156118ed5760208301516040840151606085015160001a6118e187828585611c43565b9450945050505061191f565b825160401415611917576020830151604084015161190c868383611d30565b93509350505061191f565b506000905060025b9250929050565b600081600481111561193a5761193a6127e9565b14156119435750565b6001816004811115611957576119576127e9565b14156119a55760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104ea565b60028160048111156119b9576119b96127e9565b1415611a075760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104ea565b6003816004811115611a1b57611a1b6127e9565b1415611a745760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104ea565b6004816004811115611a8857611a886127e9565b1415611ae15760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104ea565b50565b6001600160a01b038416611b0a5760405162461bcd60e51b81526004016104ea9061264b565b611b1986868661156c87611bf8565b6000838152600080516020612907833981519152602081815260408084206001600160a01b038a1685529091529091205483811015611b6a5760405162461bcd60e51b81526004016104ea906125b7565b6000858152602083815260408083206001600160a01b038b81168552925280832093879003909355871681529081208054859290611ba99084906126b4565b909155505060408051858152602081018590526001600160a01b038088169289821692918b16917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016118a5565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611c3257611c326127ff565b602090810291909101015292915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611c7a5750600090506003611d27565b8460ff16601b14158015611c9257508460ff16601c14155b15611ca35750600090506004611d27565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611cf7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d2057600060019250925050611d27565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b01611d5187828885611c43565b935093505050935093915050565b828054611d6b90612750565b90600052602060002090601f016020900481019282611d8d5760008555611dd3565b82601f10611da657805160ff1916838001178555611dd3565b82800160010185558215611dd3579182015b82811115611dd3578251825591602001919060010190611db8565b50611ddf929150611de3565b5090565b5b80821115611ddf5760008155600101611de4565b80356001600160a01b0381168114611e0f57600080fd5b919050565b600082601f830112611e2557600080fd5b81356020611e3282612690565b604051611e3f828261278b565b8381528281019150858301600585901b87018401881015611e5f57600080fd5b60005b85811015611e7e57813584529284019290840190600101611e62565b5090979650505050505050565b600082601f830112611e9c57600080fd5b813567ffffffffffffffff811115611eb657611eb6612815565b604051611ecd601f8301601f19166020018261278b565b818152846020838601011115611ee257600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611f1157600080fd5b61041982611df8565b60008060408385031215611f2d57600080fd5b611f3683611df8565b9150611f4460208401611df8565b90509250929050565b600080600080600060a08688031215611f6557600080fd5b611f6e86611df8565b9450611f7c60208701611df8565b9350604086013567ffffffffffffffff80821115611f9957600080fd5b611fa589838a01611e14565b94506060880135915080821115611fbb57600080fd5b611fc789838a01611e14565b93506080880135915080821115611fdd57600080fd5b50611fea88828901611e8b565b9150509295509295909350565b600080600080600060a0868803121561200f57600080fd5b61201886611df8565b945061202660208701611df8565b93506040860135925060608601359150608086013567ffffffffffffffff81111561205057600080fd5b611fea88828901611e8b565b6000806040838503121561206f57600080fd5b61207883611df8565b91506020830135801515811461208d57600080fd5b809150509250929050565b600080604083850312156120ab57600080fd5b6120b483611df8565b946020939093013593505050565b600080604083850312156120d557600080fd5b823567ffffffffffffffff808211156120ed57600080fd5b818501915085601f83011261210157600080fd5b8135602061210e82612690565b60405161211b828261278b565b8381528281019150858301600585901b870184018b101561213b57600080fd5b600096505b848710156121655761215181611df8565b835260019690960195918301918301612140565b509650508601359250508082111561217c57600080fd5b5061218985828601611e14565b9150509250929050565b6000602082840312156121a557600080fd5b8135610419816128d0565b6000602082840312156121c257600080fd5b8151610419816128d0565b600080600080600060a086880312156121e557600080fd5b853567ffffffffffffffff8111156121fc57600080fd5b61220888828901611e8b565b95505061221760208701611df8565b935061222560408701611df8565b925061223360608701611df8565b915061224160808701611df8565b90509295509295909350565b600080600080600080600060e0888a03121561226857600080fd5b873567ffffffffffffffff8082111561228057600080fd5b61228c8b838c01611e8b565b985060208a0135975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a01359150808211156122c557600080fd5b506122d28a828b01611e8b565b91505092959891949750929550565b6000602082840312156122f357600080fd5b5035919050565b600081518084526020808501945080840160005b8381101561232a5781518752958201959082019060010161230e565b509495945050505050565b6000815180845261234d816020860160208601612724565b601f01601f19169290920160200192915050565b60008151612373818560208601612724565b9290920192915050565b6000895161238f818460208e01612724565b919091019788525060208701959095526040860193909352606080860192909252608085015260a08401919091521b6bffffffffffffffffffffffff191660c082015260d401919050565b600080845481600182811c9150808316806123f657607f831692505b602080841082141561241657634e487b7160e01b86526022600452602486fd5b81801561242a576001811461243b57612468565b60ff19861689528489019650612468565b60008b81526020902060005b868110156124605781548b820152908501908301612447565b505084890196505b5050505050506124788185612361565b95945050505050565b6001600160a01b0386811682528516602082015260a0604082018190526000906124ad908301866122fa565b82810360608401526124bf81866122fa565b905082810360808401526124d38185612335565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061251990830184612335565b979650505050505050565b60208152600061041960208301846122fa565b60408152600061254a60408301856122fa565b828103602084015261247881856122fa565b6020815260006104196020830184612335565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6020808252602b908201527f455243313135353a20696e73756666696369656e742062616c616e636573206660408201526a37b9103a3930b739b332b960a91b606082015260800190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b600067ffffffffffffffff8211156126aa576126aa612815565b5060051b60200190565b600082198211156126c7576126c76127d3565b500190565b6000826126e957634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615612708576127086127d3565b500290565b60008282101561271f5761271f6127d3565b500390565b60005b8381101561273f578181015183820152602001612727565b838111156112a55750506000910152565b600181811c9082168061276457607f821691505b6020821081141561278557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff811182821017156127b1576127b1612815565b6040525050565b60006000198214156127cc576127cc6127d3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d11156112875760046000803e5060005160e01c90565b600060443d10156128545790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561288457505050505090565b828501915081518181111561289c5750505050505090565b843d87010160208285010111156128b65750505050505090565b6128c56020828601018761278b565b509095945050505050565b6001600160e01b031981168114611ae157600080fdfe47dc25f21c7793543edaeb1ef19d41726ddbada967ae9a7980b9bd8a45228a5e1799cf914cb0cb442ca7c7ac709ee40d0cb89e87351dc08d517fbda27d50c68ba2646970667358221220ad8dc5a4886c0504763c6750e70bde3f494eb9c11796e5569853c3e6205e8d8e64736f6c63430008070033";

export class CyberDestinationUtilityFactoryFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CyberDestinationUtilityFactoryFacet> {
    return super.deploy(
      overrides || {}
    ) as Promise<CyberDestinationUtilityFactoryFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CyberDestinationUtilityFactoryFacet {
    return super.attach(address) as CyberDestinationUtilityFactoryFacet;
  }
  connect(signer: Signer): CyberDestinationUtilityFactoryFacet__factory {
    return super.connect(
      signer
    ) as CyberDestinationUtilityFactoryFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CyberDestinationUtilityFactoryFacetInterface {
    return new utils.Interface(
      _abi
    ) as CyberDestinationUtilityFactoryFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CyberDestinationUtilityFactoryFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CyberDestinationUtilityFactoryFacet;
  }
}
