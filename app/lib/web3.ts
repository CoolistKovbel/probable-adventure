import { ethers } from "ethers";

import token from "./abis/token.json";
import engine from "./abis/engine.json";
import nftContract from "./abis/nft.json";
import { toast } from "react-toastify";

// nft token contract
// export const nftTokenAddress = "0x8652D8138Ec8f66F5C7EB831A1146bA4C4C25C78"; //test
export const nftTokenAddress = "0xBB1dfF8cb40cBCf395A7e42Fc4A9BCE663D520CB"; //mainnet

// erc token contract
// export const NeuronClumpTokenAddress = "0xDd332Aa25D185CcD09A25db1e312e991879062cb"; // test
export const NeuronClumpTokenAddress = "0x05F868A3F0d4b30d402b55E45895d527F5783DA3"; // mainnet

// smart contract vault
//fix
// export const PhotuneLightwayContract = "0x98aAE939b000653429F0046542a6Bac2C7eF7217"; //main
export const PhotuneLightwayContract = "0x5990A885256B113AeA89105A04329317d672B3F6";

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

export const getTotalAmountNFTOwn = async (user: string) => {
  try {
    if (typeof window !== "undefined" && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get the signer from the provider
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      const contractInstance = new ethers.Contract(
        nftTokenAddress,
        nftContract.abi,
        signer
      );

      const res = await contractInstance.balanceOf(address);

      return res.toString();
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

    toast(`De hash: ${res.hash}`);
    await res.wait();
    toast(`De completed hash: ${res.hash}`);
  } catch (error) {
    console.log(error);
  }
};


export const leaveVault = async (vaultId: any) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      engine.abi,
      signer
    );

    const gg = await contractInstance.leaveVaultAndClaimRewards(vaultId);

    console.log(gg);
  } catch (error) {
    console.log(error);
  }
};

// Add token auto compoiund

export const autoCompoud = async (vault: any) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      engine.abi,
      signer
    );

    const res = await contractInstance.compoundRewards(vault, {
      gasLimit: 600000,
    });
  } catch (error) {
    console.log(error);
  }
};

// Add token to compound
export const addTokenToVault = async (vaultId: any, amount: any) => {
  try {
    const amountInWei = ethers.utils.parseEther(amount.toString());


    console.log("Adding token through web3. Initializing connection");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      engine.abi,
      signer
    );

    // Join vault
    const bv = await contractInstance.joinVault(vaultId, amountInWei, {
      gasLimit: 600000,
    });

    console.log(bv, "vault");
  } catch (error) {
    console.log(error);
    return "Error occurred while adding token to vault.";
  }
};

export const AddApproveToken = async (vaultId: any, amount: any) => {
  try {
    console.log("Adding token through web3. Initializing connection");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract token
    const contractInstance = new ethers.Contract(
      NeuronClumpTokenAddress,
      token.abi,
      signer
    );

    const gg = await contractInstance.approve(
      PhotuneLightwayContract,
      ethers.utils.parseEther(amount.toString())
    );

    await gg.wait();

    return gg;
  } catch (error) {
    console.log(error);
    return "Looser error";
  }
};

export const createVault = async (formData: FormData) => {
  try {
    const { vaultName, vaultMultiplier, vaultType } =
      Object.fromEntries(formData);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      nftContract.abi,
      signer
    );

    await contractInstance.createVault(
      vaultName as string,
      Number(vaultMultiplier),
      vaultType as string,
      {
        gasLimit: 600000,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// ============

// Approve function
export const approveTokenTransfer = async (amount: any) => {
  try {
    console.log("Approving token transfer");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      NeuronClumpTokenAddress,
      token.abi,
      signer
    );

    const gg = await contractInstance.approve(PhotuneLightwayContract, amount);
    console.log(gg);

    await gg.wait();

   return gg
  } catch (error) {
    console.log(error);
  }
};

// Grab vault
export const grabStakeVault = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      engine.abi,
      signer
    );

    const vaultData = await contractInstance.getAllVaults();

    // Assuming all arrays have the same length
    const numVaults = vaultData[0].length;
    const vaults = [];

    for (let i = 0; i < numVaults; i++) {
      const vault = {
        name: vaultData[0][i],
        owner: vaultData[1][i],
        multiplier: vaultData[2][i],
        type: vaultData[3][i],
        totalAmount: vaultData[4][i],
        creationTimestamp: vaultData[5][i]
      };

      vaults.push(vault);
    }

    console.log("All Vaults:", vaults);

    return vaults;
    
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};




// ===========
// Create vault \
export const crv = async (formData: FormData) => {
  const { vaultName, vaultMultiplier, vaultType } =
    Object.fromEntries(formData);

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      PhotuneLightwayContract,
      engine.abi,
      signer
    );

    await contractInstance.createVault(
      vaultName.toString(),
      Number(vaultMultiplier),
      vaultType.toString(),
      {
        gasLimit: 600000,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
// edit-update-token }{ =} vault
//

// Get all vaults \
export const viewVaults = async () => {
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

    while (true) {
      try {
        const vault = await contractInstance.vaults(index);

        console.log("the cujrrent index is ", index);

        if (
          vault.name === "" ||
          vault.stakingToken === ethers.constants.AddressZero
        ) {
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
    return vaults;
  } catch (error) {
    console.log(error);
  }
};

export const userVaultz = async () => {
  try {

    console.log("grabbing user vqaluta")

    
  } catch (error) {
    console.log(error)
    console.log("error")
  }
}