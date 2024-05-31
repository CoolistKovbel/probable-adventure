"use client";

import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { nftTokenAddress } from "../lib/web3";
import nftContract from "../lib/abis/nft.json";
import { toast } from "react-toastify";

const MintPage = () => {

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
          value: ethers.utils.parseEther((0.042).toString()),
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
    <div className="w-full md:w-[80%] mx-auto bg-[#444] drop-shadow-lg rounded-md h-full md:h-[700px] flex flex-col justify-around">

      <header className="w-full mb-2">

        <div className="flex items-center justify-between w-full mb-4  p-5">
          <h2 className="text-5xl font-bold">Mint Now</h2>
          <Link
            href="/mint"
            className="text-4xl hover:bg-[#111] text-center rounded-lg"
          >
            <i>📍</i>
          </Link>
        </div>

        <p className="text-gray-300 p-4 bg-[#222]">
          Over 222 unique tokens within the collection allow you to be able to
          setup for minting to be able to earn more token. Get your first NFT
          collectors item where you will be able to not only be able to use for
          whatever your heart desires but also be able to get and earn
          NueroClump token where you will be able to use for more cases later.
        </p>
      </header>

      <div className="flex items-center flex-col md:flex-row justify-around w-full p-4">

        <div className="w-[300px] h-[300px] relative mx-auto mb-2">
          <Image
            src="/photune-coll.png"
            alt="stupif collection"
            fill
            className="drop-shadow-lg rounded-md"
          />
        </div>

        <div className="p-4 w-full md:w-[50%] bg-[#222] rounded-lg drop-shadow-lg">

          <header className="mb-4">
            <h2 className="text-4xl font-bold text-center mb-2">Photune Lightway Collection</h2>
            <p className="text-md mb-4">
              <span className="font-bold uppercase underline">
                Description:{" "}
              </span>
              When hope may seem lost and the darkness is rising, a tool so
              powerful yet simple, takes in the darkness and produces it into
              light. Not just any ordinary light, but a light so thin yet so
              powerful, that color gets produced even in the darkest depths of
              space where a tune so creates brings harmony all around.
            </p>

            <p className="text-sm text-[#000] text-center p-2 bg-[#999] rounded-lg capitalize">
              Grab yours today and be the light for someone in their darkest
              moments
            </p>
          </header>

          {/* Minting form */}

          <form
            className="flex items-center gap-5 w-full justify-center p-4 bg-[#222] rounded-md drop-shadow-lg"
            onSubmit={handleNftMint}
          >
            <input
              type="number"
              placeholder="enter amount"
              id="nftAmount"
              name="nftAmount"
              className="bg-[#111] p-2 text-white  drop-shadow-lg rounded-md text-white  font-mono"
            />
            <button className="p-2 bg-[#999] rounded-lg font-bold uppercase hover:bg-[#444]">
              submit
            </button>
          </form>

        </div>

      </div>
      
    </div>
  );
};

export default MintPage;
