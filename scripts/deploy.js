const {ethers} = require("hardhat");


const main = async () =>{
    const contractFactory = await ethers.getContractFactory("NFTMarketplace");
    const contract = await contractFactory.deploy();
    await contract.deployed();
    console.log("contract deployed to :", contract.address);
    //save the address to use later in frontend
}

const runMain = async ()=>{
    try{
        await main();
        process.exit(0);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

runMain();