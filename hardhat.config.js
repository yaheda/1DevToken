//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli : {
      url: 'https://eth-goerli.g.alchemy.com/v2/5IKvK2Y5wuaY-75zlnn6XJOnDEVr5bVj',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
