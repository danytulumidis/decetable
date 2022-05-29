require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
