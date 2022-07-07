const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // get the contract
  const contract = await ethers.getContractFactory("Decetable");

  // Current Charity (Save the children)
  // 0xCf9Fd660B448AD694B2355a224F12256E7c113Ec

  // deploy the contract
  const deployedContract = await contract.deploy(
    "0xCf9Fd660B448AD694B2355a224F12256E7c113Ec"
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
