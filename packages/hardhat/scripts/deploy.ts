import { ethers } from "hardhat";

async function main() {
  const miniPayNFT = await ethers.deployContract("HireHappy", ['0x9Fa56e2A9d7563246f2FB898B9f10C9cf41661C1']);

  await miniPayNFT.waitForDeployment();

  console.log("Minipay NFT address - " + (await miniPayNFT.getAddress()));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
