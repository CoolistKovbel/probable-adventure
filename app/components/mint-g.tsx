"use client";

import { ethers } from "ethers";
import { useEffect } from "react";
import { nftTokenAddress } from "../lib/web3";
import nftContract from "../lib/abis/nft.json";
import { toast } from "react-toastify";

const MintG = () => {

  const handleNftMint = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nftAmount = formData.get("nftAmount");

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

        toast(`handling mint ${address} - ${nftAmount}`);

        const res = await contractInstance.mint(nftAmount, {
          value: ethers.utils.parseEther((0.042 * Number(nftAmount)).toString()),
          gasLimit: 600000,
        });

        toast(await res.wait());
        toast(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Listen for the UserMinted event
    if (typeof window !== "undefined" && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const contractInstance = new ethers.Contract(
        nftTokenAddress,
        nftContract.abi,
        provider
      );

      contractInstance.on("UserMinted", (user, nft) => {
        // Handle the event here
        console.log("UserMinted event:", user, nft);
        toast(`User ${user} minted NFT ${nft}`);
      });

      return () => {
        contractInstance.removeAllListeners("UserMinted");
      };
    }
  }, []);

  return (
    <form className="p-5 bg-[#111] rounded-lg flex flex-col gap-4 items-center mt-4 mb-4 drop-shadow-lg border-2" onSubmit={handleNftMint}>
      <input
        type="number"
        placeholder="enter amount"
        className="p-2 bg-[#222] font-bold rounded-lg w-[90%]"
        id="nftAmount"
        name="nftAmount"
      />
      <button className="p-2 rounded-lg bg-[#222] w-full hover:bg-red-500">
        mint
      </button>
    </form>
  );
};

export default MintG;
