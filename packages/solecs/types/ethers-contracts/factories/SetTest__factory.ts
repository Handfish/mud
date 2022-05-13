/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SetTest, SetTestInterface } from "../SetTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_TEST",
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
    name: "failed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testAdd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testAddDuplicate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testGetItems",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testHas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testRemove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testSize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526000805460ff19166001908117909155600255737109709ecfa91a80626ff3989d68f67f5b1dd12d60805234801561003b57600080fd5b5060805161206d6100546000396000505061206d6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80639b269e9f11610076578063ae40f72f1161005b578063ae40f72f146100da578063ba414fa6146100e2578063fa7626d4146100fe57600080fd5b80639b269e9f146100ca5780639d1ef8f8146100d257600080fd5b806306a65878146100a85780630a9254e4146100b257806339cfea4a146100ba578063894a1257146100c2575b600080fd5b6100b061010b565b005b6100b06107a6565b6100b0610816565b6100b0610cea565b6100b0610eff565b6100b061110d565b6100b0611367565b6100ea611589565b604051901515815260200160405180910390f35b6000546100ea9060ff1681565b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526101b09273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e91610169916001910190815260200190565b602060405180830381865afa158015610186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101aa9190611a52565b156116e9565b600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b15801561021d57600080fd5b505af1158015610231573d6000803e3d6000fd5b5050600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526001928101929092526102d3935073ffffffffffffffffffffffffffffffffffffffff16915063cccf7a8e906024015b602060405180830381865afa1580156102aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ce9190611a52565b6116e9565b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526103319273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e91610169916002910190815260200190565b600480546040517f1003e2d20000000000000000000000000000000000000000000000000000000081528083019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b15801561039c57600080fd5b505af11580156103b0573d6000803e3d6000fd5b5050600480546040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600192810192909252610410935073ffffffffffffffffffffffffffffffffffffffff16915063cccf7a8e9060240161028d565b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081528083019290925261046c9173ffffffffffffffffffffffffffffffffffffffff9091169063cccf7a8e9060240161028d565b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526104ca9273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e91610169916002910190815260200190565b600480546040517f1003e2d2000000000000000000000000000000000000000000000000000000008152600a9281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b5050600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526001928101929092526105ab935073ffffffffffffffffffffffffffffffffffffffff16915063cccf7a8e9060240161028d565b600480546040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152808301929092526106079173ffffffffffffffffffffffffffffffffffffffff9091169063cccf7a8e9060240161028d565b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526106659273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e9161028d91600a910190815260200190565b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526106c39273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e91610169916002910190815260200190565b600480546040517f4cc8221500000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690634cc8221590602401600060405180830381600087803b15801561073057600080fd5b505af1158015610744573d6000803e3d6000fd5b5050600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526001928101929092526107a4935073ffffffffffffffffffffffffffffffffffffffff16915063cccf7a8e90602401610169565b565b6040516107b290611a45565b604051809103906000f0801580156107ce573d6000803e3d6000fd5b50600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b15801561088357600080fd5b505af1158015610897573d6000803e3d6000fd5b50505050610936600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663949d225d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561090b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092f9190611a7b565b600161175d565b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526109949273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e9161028d916001910190815260200190565b600480546040517f4cc8221500000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690634cc8221590602401600060405180830381600087803b158015610a0157600080fd5b505af1158015610a15573d6000803e3d6000fd5b50505050610ab4600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663949d225d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aad9190611a7b565b600061175d565b600480546040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152610b129273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e91610169916001910190815260200190565b600480546040517f4cc8221500000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690634cc8221590602401600060405180830381600087803b158015610b7f57600080fd5b505af1158015610b93573d6000803e3d6000fd5b5050600480546040517f4cc8221500000000000000000000000000000000000000000000000000000000815260009281019290925273ffffffffffffffffffffffffffffffffffffffff169250634cc822159150602401600060405180830381600087803b158015610c0457600080fd5b505af1158015610c18573d6000803e3d6000fd5b50505050610c8c600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663949d225d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a89573d6000803e3d6000fd5b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526107a49273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e91610169916001910190815260200190565b600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b158015610d5757600080fd5b505af1158015610d6b573d6000803e3d6000fd5b50505050610ddf600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663949d225d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561090b573d6000803e3d6000fd5b600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260029281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b158015610e4c57600080fd5b505af1158015610e60573d6000803e3d6000fd5b505050506107a4600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663949d225d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef89190611a7b565b600261175d565b600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b158015610f6c57600080fd5b505af1158015610f80573d6000803e3d6000fd5b5050600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260029281019290925273ffffffffffffffffffffffffffffffffffffffff169250631003e2d29150602401600060405180830381600087803b158015610ff157600080fd5b505af1158015611005573d6000803e3d6000fd5b505050506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663410d59cc6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611078573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526110be9190810190611ac3565b90506110e5816000815181106110d6576110d6611b9f565b6020026020010151600161175d565b61110a816001815181106110fb576110fb611b9f565b6020026020010151600261175d565b50565b61117d600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663949d225d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a89573d6000803e3d6000fd5b600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b1580156111ea57600080fd5b505af11580156111fe573d6000803e3d6000fd5b50505050611272600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663949d225d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561090b573d6000803e3d6000fd5b600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b1580156112df57600080fd5b505af11580156112f3573d6000803e3d6000fd5b505050506107a4600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663949d225d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561090b573d6000803e3d6000fd5b600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260019281019290925273ffffffffffffffffffffffffffffffffffffffff1690631003e2d290602401600060405180830381600087803b1580156113d457600080fd5b505af11580156113e8573d6000803e3d6000fd5b5050600480546040517f1003e2d200000000000000000000000000000000000000000000000000000000815260029281019290925273ffffffffffffffffffffffffffffffffffffffff169250631003e2d29150602401600060405180830381600087803b15801561145957600080fd5b505af115801561146d573d6000803e3d6000fd5b5050600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526001928101929092526114cd935073ffffffffffffffffffffffffffffffffffffffff16915063cccf7a8e9060240161028d565b600480546040517fcccf7a8e00000000000000000000000000000000000000000000000000000000815261152b9273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e9161028d916002910190815260200190565b600480546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526107a49273ffffffffffffffffffffffffffffffffffffffff9092169163cccf7a8e91610169916003910190815260200190565b60008054610100900460ff16156115a95750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156116e45760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c656400000000000000000000000000000000000000000000000000008284015282518083038401815260608301909352600092909161164e917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611c09565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261168691611c45565b6000604051808303816000865af19150503d80600081146116c3576040519150601f19603f3d011682016040523d82523d6000602084013e6116c8565b606091505b50915050808060200190518101906116e09190611a52565b9150505b919050565b8061110a577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f5060405161174d9060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a161110a6118c9565b8082146118c5577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516117e99060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e60408201527f745d000000000000000000000000000000000000000000000000000000000000606082015260800190565b60405180910390a160408051818152600a818301527f202045787065637465640000000000000000000000000000000000000000000060608201526020810183905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a160408051818152600a818301527f2020202041637475616c0000000000000000000000000000000000000000000060608201526020810184905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a16118c56118c9565b5050565b737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15611a175760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c656400000000000000000000000000000000000000000000000000009282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc490608001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526119989291602001611c09565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526119d091611c45565b6000604051808303816000865af19150503d8060008114611a0d576040519150601f19603f3d011682016040523d82523d6000602084013e611a12565b606091505b505050505b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b61040f80611c5283390190565b600060208284031215611a6457600080fd5b81518015158114611a7457600080fd5b9392505050565b600060208284031215611a8d57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020808385031215611ad657600080fd5b825167ffffffffffffffff80821115611aee57600080fd5b818501915085601f830112611b0257600080fd5b815181811115611b1457611b14611a94565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715611b5757611b57611a94565b604052918252848201925083810185019188831115611b7557600080fd5b938501935b82851015611b9357845184529385019392850192611b7a565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000815160005b81811015611bef5760208185018101518683015201611bd5565b81811115611bfe576000828601525b509290920192915050565b7fffffffff00000000000000000000000000000000000000000000000000000000831681526000611c3d6004830184611bce565b949350505050565b6000611a748284611bce56fe608060405234801561001057600080fd5b506103ef806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80634cc82215116100505780634cc822151461009f578063949d225d146100b2578063cccf7a8e146100c357600080fd5b80631003e2d21461006c578063410d59cc14610081575b600080fd5b61007f61007a3660046102e9565b6100e6565b005b610089610138565b6040516100969190610302565b60405180910390f35b61007f6100ad3660046102e9565b610190565b600054604051908152602001610096565b6100d66100d13660046102e9565b610286565b6040519015158152602001610096565b6100ef81610286565b156100f75750565b600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630155565b6060600080548060200260200160405190810160405280929190818152602001828054801561018657602002820191906000526020600020905b815481526020019060010190808311610172575b5050505050905090565b61019981610286565b6101a05750565b600080546101b090600190610346565b815481106101c0576101c0610384565b906000526020600020015460006001600084815260200190815260200160002054815481106101f1576101f1610384565b6000918252602080832090910192909255828152600191829052604081205481549092919081908490811061022857610228610384565b90600052602060002001548152602001908152602001600020819055506001600082815260200190815260200160002060009055600080548061026d5761026d6103b3565b6001900381819060005260206000200160009055905550565b60008054810361029857506000919050565b60008281526001602052604081205490036102d45781600080815481106102c1576102c1610384565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b6000602082840312156102fb57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561033a5783518352928401929184019160010161031e565b50909695505050505050565b60008282101561037f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea164736f6c634300080d000aa164736f6c634300080d000a";

type SetTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: SetTestConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class SetTest__factory extends ContractFactory {
  constructor(...args: SetTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SetTest";
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<SetTest> {
    return super.deploy(overrides || {}) as Promise<SetTest>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SetTest {
    return super.attach(address) as SetTest;
  }
  connect(signer: Signer): SetTest__factory {
    return super.connect(signer) as SetTest__factory;
  }
  static readonly contractName: "SetTest";
  public readonly contractName: "SetTest";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SetTestInterface {
    return new utils.Interface(_abi) as SetTestInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SetTest {
    return new Contract(address, _abi, signerOrProvider) as SetTest;
  }
}
