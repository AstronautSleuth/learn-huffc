const hre = require("hardhat");

async function main() {
  const MATH = await hre.ethers.getContractFactory("Math");
  const math = await MATH.deploy();
  await math.deployed();

  console.log(await math.max(5, 16));
  console.log(await math.max(13, 5));
  console.log(await math.min(4, 17));
  console.log(await math.min(17, 1));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
