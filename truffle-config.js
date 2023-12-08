const HDWalletProvider = require('@truffle/hdwallet-provider');
const privKeys = ["..."]; //Private Key 
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
    neebytes: {
      provider: () => new HDWalletProvider(privKeys, "https://dataseed-p1.NEEnetwork.com"),
      
      // host: "https://dataseed-p1.NEEnetwork.com",
      // port: "*",
      network_id: "*",  
      gas: 5000000
    }
  },
  compilers: {
    solc: {
     version: "0.8.13",
       // version: "0.5.1",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
 