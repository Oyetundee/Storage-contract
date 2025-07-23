// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import * as dotenv from "dotenv";

// dotenv.config();

// const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
// const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

// const config: HardhatUserConfig = {
//   solidity: {
//     version: "0.8.28",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     sepolia: {
//       url: SEPOLIA_RPC_URL,
//       accounts: [PRIVATE_KEY],
//     },
//     liskSepolia: {
//       url: "https://rpc.sepolia-api.lisk.com",
//       accounts: [PRIVATE_KEY],
//       chainId: 4202,
//     },
//     coreDAO: {
//       url: "https://rpc.test2.btcs.network",
//       accounts: [PRIVATE_KEY],
//       chainId: 1114,
//     }
//   },
//   etherscan: {
//     apiKey: ETHERSCAN_API_KEY,
//     customChains: [
//       {
//         network: "liskSepolia",
//         chainId: 4202,
//         urls: {
//           apiURL: "https://sepolia-blockscout.lisk.com/api",
//           browserURL: "https://sepolia-blockscout.lisk.com",
//         },
//       },
//       {
//         network: "coreDAO",
//         chainId: 1114,
//         urls: {
//           apiURL: "https://scan.test2.btcs.network/api",
//           browserURL: "https://scan.test2.btcs.network",
//         },
//       },
//     ],
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts",
//   },
// };

// export default config;
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) throw new Error("PRIVATE_KEY is not set in .env");

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/XDb7stvTa6awZVzshmrm5sTpMzVDLqZi",
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    coreDAO: {
      url: "https://rpc.test2.btcs.network",
      accounts: [PRIVATE_KEY],
      chainId: 1114,
      gas: 3000000, // Adjust based on contract complexity
      gasPrice: 1000000000, // 1 gwei, adjust as needed
    },
  },
  etherscan: {
    apiKey: {
      coreDAO: process.env.CORESCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "coreDAO",
        chainId: 1114,
        urls: {
          apiURL: "https://api.testnet.scan.coredao.org/api",
          browserURL: "https://testnet.scan.coredao.org",
        },
      },
    ],
  },
};

export default config;