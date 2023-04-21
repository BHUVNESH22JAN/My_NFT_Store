require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    // hardhat:{
      // for local network
    // },
    rinkeby:{
      url: process.env.INFURA_URL,
      accounts:[process.env.WALLET_PRIVATE_KEY]
    }
  }
};
