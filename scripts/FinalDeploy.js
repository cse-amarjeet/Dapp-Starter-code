
const hre = require("hardhat");

async function main() {


  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buymeacoffee = await BuyMeACoffee.deploy();

  await buymeacoffee.deployed();

  console.log(
    `buymeacoffee is deployed to ${buymeacoffee.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});