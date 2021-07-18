require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeys = ["df438e55c3fa2da73a0d7b2b87b419b9c550b87f9c5287295fdcaafbb736140a", "ac1346139b06df8d146a9995bd82a4c99cda4be60e3a514bab2dad76e55c9384"]//process.env.PRIVATE_KEYS || ""

let Tester = new HDWalletProvider({
        privateKeys: privateKeys,
        providerOrUrl: 'https://kovan.infura.io/v3/94b7b35f10524747a5ad298f8c49c8d3'
      })
console.log(Tester)
module.exports = {


  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    kovan: {
      provider: () => new HDWalletProvider({
        privateKeys: privateKeys,
        providerOrUrl: 'https://kovan.infura.io/v3/94b7b35f10524747a5ad298f8c49c8d3'
      }),
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  compilers: {
    solc: {
      optimizr: {
        enabled: true,
        runs: 200
      }
    },
  },
};
