const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("NightingGale");
  console.log("contract address:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});