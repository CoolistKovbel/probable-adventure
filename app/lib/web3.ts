import { ethers } from "ethers";

import token from "./abis/token.json";

// nft token contract
export const nftTokenAddress = "0x26780E03eDb289D75E1b61219a92ad729a696937";
export const NeuronClumpTokenAddress =
  "0xDd332Aa25D185CcD09A25db1e312e991879062cb";
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
