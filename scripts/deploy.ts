import { ethers } from "hardhat";
import { todo } from "node:test";

async function main() {
  const toDo = await ethers.deployContract("ToDo");

  await toDo.waitForDeployment();

  console.log(`Contract deployed to ${toDo.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
