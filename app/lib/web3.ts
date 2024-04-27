import { ethers } from "ethers";

// nft token contract
export const nftTokenAddress = "QmNmsQFpNw4yCyzYyfK1symQZHHvpdWJ6U8hLY6teGCuKu"
export const NeuronClumpTokenAddress = "0x31F0F337A5bF6c092Cce4C71c7b52CA635EB2D7e"
// erc token contract

// smart contract


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

export const getBlockNum = async () =>{
  try {
    
    if (typeof window.ethereum !== 'undefined') {
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });
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
      console.log('Connected account:', account);
      console.log('Balance:', formattedBalance, 'ETH');
      return formattedBalance;
    } else {
      console.log('MetaMask is not installed');
    }

  } catch (error) {
    console.log(error)
  }
}

