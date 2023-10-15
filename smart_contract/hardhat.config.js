require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/MEpjGkhd87jhhMyFAjDcNPAIlpUoETa6",
      accounts: [
        "1fb8c8e625acd0b22c44f08c3fd0c1d738e1b4c65d932799f4f99e7dbf7a88c9",
      ],
    },
  },
};
