import { InfiniteMovingCardsDemo } from "@/app/components/InfitintSc";
import MintG from "@/app/components/mint-g";
import { EmailList } from "@/app/components/waitlist/emailList";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-5 ">

      <header className="text-center p-2 bg-[#111] ">

        <h1 className="text-3xl md:text-5xl font-bold  p-5">
          PhotuneLightway Collections
        </h1>

        <div className="flex items-center p-10 flex-col">
          
          <div className="w-full md:w-[300px] h-[300px] relative mx-auto">
            <Image
              src="/photune.png"
              alt="f"
              fill
              className="rounded-md drop-shadow-lg"
            />
          </div>

          <div className="w-full md:w-[50%] mt-4">
            <p>
              Try to collect all 222 of the nfts that come from the collection
              where each one is uniquelly different. Where you are able to
              capture a moment where nothing can turn to something
            </p>
          </div>
        </div>

      </header>

      {/* TODO: FIX this */}
      <div>
        <InfiniteMovingCardsDemo />
      </div>

      <div className="bg-[#222] p-5 drop-shadow-lg rounded-lg">
        <h2 className="text-3xl md:text-5xl font-bold text-center capitalize mb-5">
          ERC-721 Perks and benifits
        </h2>

        {/* Per */}
        <div className="bg-[#111] p-3 rounded-lg flex flex-col gap-5 mb-4">
          <p>
            By owning a erc-721 token you will be able to use your token as modifier towards our staking generators. You will also be able to trade your tokens.
          </p>
        </div>

        {/* BEn */}
        <div className="bg-[#111] p-3 rounded-lg flex flex-col gap-5">
          <p>
            By owning this nft you own full ownership of that token and are able to use it for whatever you may desire.
          </p>
        </div>
      </div>

      <div className="p-5 bg-[#222]">
        <h2 className="text-5xl capitalize mb-5 font-bold text-center">
          Mint NFT collection
        </h2>

        <div className="flex items-center w-full md:w-[80%] mx-auto flex-col md:flex-row gap-4 mb-10 bg-[#111] p-10 rounded-lg justify-center gap-10 drop-shadow-lg">

          <div className="w-[250px] md:w-[300px] md:h-[300px] h-[250px] relative ">
            <Image
              src="/photune.png"
              alt="myster nft minting"
              fill
              className="drop-shadow-lg rounded-lg"
            />
          </div>

          <div className="w-full md:w-[50%]">
            <h2 className="text-2xl md:text-4xl capitalize mb-4 text-center font-bold">
              Mint out of 222
            </h2>
            <p className="text-sm text-center">
              Capture one of the 222 moments that can be use to unlocked extra
              features within the site. If you hold onto them you will be able
              to use it in other sites.
            </p>

            <MintG />
          </div>
        </div>

        <EmailList />
      </div>

    </section>
  );
};

export default Page;
