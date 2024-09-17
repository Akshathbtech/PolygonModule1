const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/NightingGale.sol/NightingGale.json");

const tokenAddress = "0xB4BdB7cc9b4ac4268aBCb83483BD2a6E899d77b4"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x58130Aa400EB0138A3964980d84A857FfA12A218";

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();