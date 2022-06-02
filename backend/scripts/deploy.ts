const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // get the contract
  const contract = await ethers.getContractFactory("Decetable");

  // deploy the contract
  const deployedContract = await contract.deploy(
    "0xeeB813238C79147E0535C34207C7F916777ea34d"
  );

  // print the address of the deployed contract
  console.log("Deployed Contract:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
