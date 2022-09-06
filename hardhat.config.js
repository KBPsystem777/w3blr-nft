require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")

require("dotenv").config()

module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_RINKEBY_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
    ropsten: {
      url: process.env.REACT_APP_ROPSTEN_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
}
