import { ethers } from "ethers";
 
import token from "./abis/token.json";
import engine from "./abis/engine.json"


// nft token contract
export const nftTokenAddress = "0x26780E03eDb289D75E1b61219a92ad729a696937";
// erc token contract
export const NeuronClumpTokenAddress = "0xDd332Aa25D185CcD09A25db1e312e991879062cb";
// smart contract
export const PhotuneLightwayContract = "0x15ab812CfFA45E696C4F073080507ece11b1Cc5e"

export const getEthereumObject = () => {
  return typeof window !== "undefined" ? window.ethereum : null;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBlockNum = async () => {
  try {
    if (typeof window.ethereum !== "undefined") {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Create a provider instance
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Get the signer
      const signer = provider.getSigner();
      // Get the connected account address
      const account = await signer.getAddress();
      // Get the balance of the connected account
      const balance = await provider.getBalance(account);
      // Convert balance to ETH
      const formattedBalance = ethers.utils.formatEther(balance);

      // Now you have the account address and its balance
      console.log("Connected account:", account);
      console.log("Balance:", formattedBalance, "ETH");
      return formattedBalance;
    } else {
      console.log("MetaMask is not installed");
    }
  } catch (error) {
    console.log(error);
  }
};

export const convertEthToNCT = async (ethToken: any) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      NeuronClumpTokenAddress,
      token.abi,
      signer
    );

    const res = await contractInstance.swapEtherForTokens({
      value: ethers.utils.parseEther(ethToken.toString()),
      gasLimit: 600000,
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const viewVaults = async() => {
  try {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      engine.abi,
      signer
    );

    let index = 0;
    let vaults = [];

    while(true) {
        try {
          const vault = await contractInstance.vaults(index);

          console.log("the cujrrent index is ", index)

          if (vault.name === "" || vault.stakingToken === ethers.constants.AddressZero) {
              break; // Exit the loop if the vault is empty or invalid
          }

          // Push the vault details into the vaults array
          vaults.push(vault);
          
          // Increment the index for the next iteration
          index++;
      } catch (error) {
          // Exit the loop if an error occurs (likely due to an invalid index)
          break;
      }
    }

    console.log(vaults, "in web3");
    return vaults

    
  } catch (error) {
    console.log(error)
  }
}

// Add token auto compoiund

export const autoCompoud = async (vault:any) => {

  try {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      engine.abi,
      signer
    );

    const res = await contractInstance.compoundRewards(vault,{
      gasLimit: 600000,
    });
    
  } catch (error) {
    console.log(error)
  }
}

// Add token to compound
export const addTokenToVault = async (vaultId:any, amount:any)=> {
  try {
    console.log("Adding token through web3. initilizing connection")


    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      engine.abi,
      signer
    );

    const res = await contractInstance.joinVault(vaultId, amount,{
      gasLimit: 600000,
    });





  } catch (error) {
    console.log(error)
  }
}

// add nft token to auto compound

// remove token from auto compound

// ======
// Remove token from auto comppound

// remove token from compound
//=========

// withdrawl tokens

// update apy for specfic vault

// =======

// Add token to smart contract

// update token smart contract

// add new vault

//=========

// mint nft 

// create lp
