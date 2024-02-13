import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ToDo", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployToDoFixture() {
    const ToDo = await ethers.getContractFactory("ToDo");
    const toDo = await ToDo.deploy();

    return { toDo };
  }

  describe("ToDo Functions", function () {
    it("Should set  and get title, description, and status", async function () {
      const { toDo } = await loadFixture(deployToDoFixture);

      const tx = await toDo.createToDo("Abel", "Tested");
      const name = await toDo.seeToDo(0);

      expect(name).to.equal("Abel", "Testing");
    });

    it("Should update title and Description", async function () {
      const { toDo } = await loadFixture(deployToDoFixture);

      const tx = await toDo.updateToDo(0, "John", "test");
      const update = await toDo.seeToDo(0);

      expect(update).to.equal(0);
    });

    it("Should Delete information", async function () {
      const { toDo } = await loadFixture(deployToDoFixture);

      const tx = await toDo.deleteToDo(0);

      const update = 
    });
  });
});
