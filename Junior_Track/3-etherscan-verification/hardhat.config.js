require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL_MATIC = process.env.QUICKNODE_HTTP_URL_MATIC;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

const QUICKNODE_HTTP_URL_GOERLI = process.env.QUICKNODE_HTTP_URL_GOERLI;
const ETHERNSCAN_KEY = process.env.ETHERNSCAN_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: QUICKNODE_HTTP_URL_MATIC,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: QUICKNODE_HTTP_URL_GOERLI,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      //polygonMumbai: POLYGONSCAN_KEY,
      goerli: ETHERNSCAN_KEY,
    },
  },
};