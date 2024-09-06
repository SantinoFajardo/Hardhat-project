# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

<h1>First steps</h1>

1. Install `@openzeppelin/contracts`

2. Try compile contracts with

```shell
    npx hardhat compile
```

<h2>Deploying smart contracts</h2>
<h3>Local blockchain</h3>

1. Run the hardhat node

```shell
    npx hardhat node
```

2. Deploy with testing accounts

```shell
    npx hardhat ignition deploy ./ignition/modules/Spacebear.ts --network localhost
```

<h3>Mainnet/Testnet blockchain</h3>

1. Simple run:

```shell
    npx hardhat ignition deploy ./ignition/modules/Token.js --network <network-name>
```

2. To verify the contract we add the etherscan api key to the hardhat.config

a. If the contract is not deployed yet, can use the flag `--verify` to verify the contract on the deployment flow

b. If the contract is alredy deployed, run the command

```shell
    npx hardhat ignition verify chain-11155111
```
