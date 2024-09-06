import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SpacebearModule = buildModule("SpaceBearModule", (m) => {
  const spaceBear = m.contract("MyToken");

  return { spaceBear };
});

export default SpacebearModule;
