"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ethers } from "ethers";
import { nftTokenAddress } from "../lib/web3";

import nftContract from "../lib/abis/nft.json";

export function InfiniteMovingCardsDemo() {
  const [collection, setCollection] = useState<any>([]);

  useEffect(() => { 
    const xx = async () => {
      try {
        if (typeof window !== "undefined" && window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          // Get the signer from the provider
          const signer = provider.getSigner();

          const contractInstance = new ethers.Contract(
            nftTokenAddress,
            nftContract.abi,
            signer
          );

          console.log("sad life");

          const cc = [];

          for (let i = 1; i < 22; i++) {
            const gg = await contractInstance.tokenURI(i);

            if (gg.startsWith("ipfs://")) {
              let u:any = "";

              u = `http://rose-magic-mandrill-283.mypinata.cloud/ipfs/${
                gg.split("ipfs://")[1]
              }`;

              

              const tokenMetaday = await fetch(u).then((res) => res.json());

              if (tokenMetaday.image.startsWith("ipfs://")) {
                u = {
                  deAlt: `${tokenMetaday.name} + ${tokenMetaday.description}`,
                  deImafe: `http://rose-magic-mandrill-283.mypinata.cloud/ipfs/QmV4GjjQQaJBYa3DJtFkLGGezYmuSjdjj7E4aGoTbWRjnU/${i}.png`,
                };
              }


              cc.push(u);
            }
          }

          setCollection(cc);
        }
      } catch (error) {
        console.log(error);
      }
    };

    xx();
  }, []);

  console.log(collection, "De collections");

  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={collection} direction="left" speed="slow" />
    </div>
  );
}
