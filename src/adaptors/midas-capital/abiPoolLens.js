module.exports = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    inputs: [],
    name: 'directory',
    outputs: [
      {
        internalType: 'contract FusePoolDirectory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ICToken',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'getBorrowCapsForAsset',
    outputs: [
      {
        internalType: 'address[]',
        name: 'collateral',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'borrowCapsPerCollateral',
        type: 'uint256[]',
      },
      {
        internalType: 'bool[]',
        name: 'collateralBlacklisted',
        type: 'bool[]',
      },
      {
        internalType: 'uint256',
        name: 'totalBorrowCap',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IComptroller',
        name: 'comptroller',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getPoolAssetsByUser',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'cToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'underlyingToken',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'underlyingName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'underlyingSymbol',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'underlyingDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'underlyingBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'supplyRatePerBlock',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'borrowRatePerBlock',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalBorrow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'supplyBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'borrowBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liquidity',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'membership',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'exchangeRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'underlyingPrice',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'oracle',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'collateralFactor',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveFactor',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'adminFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'fuseFee',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'borrowGuardianPaused',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'mintGuardianPaused',
            type: 'bool',
          },
        ],
        internalType: 'struct FusePoolLens.FusePoolAsset[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IComptroller',
        name: 'comptroller',
        type: 'address',
      },
    ],
    name: 'getPoolAssetsWithData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'cToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'underlyingToken',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'underlyingName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'underlyingSymbol',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'underlyingDecimals',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'underlyingBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'supplyRatePerBlock',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'borrowRatePerBlock',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalBorrow',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'supplyBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'borrowBalance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liquidity',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'membership',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'exchangeRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'underlyingPrice',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'oracle',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'collateralFactor',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'reserveFactor',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'adminFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'fuseFee',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'borrowGuardianPaused',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'mintGuardianPaused',
            type: 'bool',
          },
        ],
        internalType: 'struct FusePoolLens.FusePoolAsset[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IComptroller',
        name: 'comptroller',
        type: 'address',
      },
    ],
    name: 'getPoolSummary',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getPoolsByAccountWithData',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'comptroller',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'blockPosted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestampPosted',
            type: 'uint256',
          },
        ],
        internalType: 'struct FusePoolDirectory.FusePool[]',
        name: '',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalBorrow',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'underlyingTokens',
            type: 'address[]',
          },
          {
            internalType: 'string[]',
            name: 'underlyingSymbols',
            type: 'string[]',
          },
          {
            internalType: 'bool',
            name: 'whitelistedAdmin',
            type: 'bool',
          },
        ],
        internalType: 'struct FusePoolLens.FusePoolData[]',
        name: '',
        type: 'tuple[]',
      },
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getPoolsOfUserWithData',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'comptroller',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'blockPosted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestampPosted',
            type: 'uint256',
          },
        ],
        internalType: 'struct FusePoolDirectory.FusePool[]',
        name: '',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalBorrow',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'underlyingTokens',
            type: 'address[]',
          },
          {
            internalType: 'string[]',
            name: 'underlyingSymbols',
            type: 'string[]',
          },
          {
            internalType: 'bool',
            name: 'whitelistedAdmin',
            type: 'bool',
          },
        ],
        internalType: 'struct FusePoolLens.FusePoolData[]',
        name: '',
        type: 'tuple[]',
      },
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'whitelistedAdmin',
        type: 'bool',
      },
    ],
    name: 'getPublicPoolsByVerificationWithData',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'comptroller',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'blockPosted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestampPosted',
            type: 'uint256',
          },
        ],
        internalType: 'struct FusePoolDirectory.FusePool[]',
        name: '',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalBorrow',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'underlyingTokens',
            type: 'address[]',
          },
          {
            internalType: 'string[]',
            name: 'underlyingSymbols',
            type: 'string[]',
          },
          {
            internalType: 'bool',
            name: 'whitelistedAdmin',
            type: 'bool',
          },
        ],
        internalType: 'struct FusePoolLens.FusePoolData[]',
        name: '',
        type: 'tuple[]',
      },
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPublicPoolsWithData',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'comptroller',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'blockPosted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestampPosted',
            type: 'uint256',
          },
        ],
        internalType: 'struct FusePoolDirectory.FusePool[]',
        name: '',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalBorrow',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'underlyingTokens',
            type: 'address[]',
          },
          {
            internalType: 'string[]',
            name: 'underlyingSymbols',
            type: 'string[]',
          },
          {
            internalType: 'bool',
            name: 'whitelistedAdmin',
            type: 'bool',
          },
        ],
        internalType: 'struct FusePoolLens.FusePoolData[]',
        name: '',
        type: 'tuple[]',
      },
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IComptroller',
        name: 'comptroller',
        type: 'address',
      },
    ],
    name: 'getSupplyCapsForPool',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getWhitelistedPoolsByAccount',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'comptroller',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'blockPosted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestampPosted',
            type: 'uint256',
          },
        ],
        internalType: 'struct FusePoolDirectory.FusePool[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getWhitelistedPoolsByAccountWithData',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'comptroller',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'blockPosted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestampPosted',
            type: 'uint256',
          },
        ],
        internalType: 'struct FusePoolDirectory.FusePool[]',
        name: '',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'totalSupply',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalBorrow',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'underlyingTokens',
            type: 'address[]',
          },
          {
            internalType: 'string[]',
            name: 'underlyingSymbols',
            type: 'string[]',
          },
          {
            internalType: 'bool',
            name: 'whitelistedAdmin',
            type: 'bool',
          },
        ],
        internalType: 'struct FusePoolLens.FusePoolData[]',
        name: '',
        type: 'tuple[]',
      },
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract FusePoolDirectory',
        name: '_directory',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
      {
        internalType: 'address[]',
        name: '_hardcodedAddresses',
        type: 'address[]',
      },
      {
        internalType: 'string[]',
        name: '_hardcodedNames',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '_hardcodedSymbols',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '_uniswapLPTokenNames',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '_uniswapLPTokenSymbols',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '_uniswapLPTokenDisplayNames',
        type: 'string[]',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ICToken',
        name: 'cToken',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'block',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'accountProofNodesRlp',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'reserveAndTimestampProofNodesRlp',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'priceAccumulatorProofNodesRlp',
            type: 'bytes',
          },
        ],
        internalType: 'struct UniswapOracle.ProofData',
        name: 'proofData',
        type: 'tuple',
      },
    ],
    name: 'verifyPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
