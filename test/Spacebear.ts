import { expect } from "chai";
import hre from "hardhat";
import { MyToken } from "../typechain-types";
import { ContractTransactionResponse } from "ethers";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("SpaceBear", () => {
  async function deploySpaceBearContract() {
    const SpaceBear = await hre.ethers.getContractFactory("MyToken");
    const spaceBearInstace = await SpaceBear.deploy();

    return { spaceBearInstace };
  }

  it("Shoul mint a token to a specific address", async () => {
    const { spaceBearInstace } = await loadFixture(deploySpaceBearContract);
    const [owner, account] = await hre.ethers.getSigners();

    await spaceBearInstace.safeMint(account.address, "spacebear_1.json");
    expect(await spaceBearInstace.ownerOf(0)).to.equal(account.address);
  });

  it("should not allow transfer from is account have not allowance", async () => {
    const { spaceBearInstace } = await loadFixture(deploySpaceBearContract);
    const [owner, account, account2] = await hre.ethers.getSigners();

    await spaceBearInstace.safeMint(account.address, "spacebear_1.json");

    await expect(
      spaceBearInstace
        .connect(account2) // Now the msg.sender is account2
        .transferFrom(account.address, account2.address, 0)
    )
      .to.be.revertedWithCustomError(
        spaceBearInstace,
        "ERC721InsufficientApproval"
      )
      .withArgs(account2.address, 0);
  });
});
