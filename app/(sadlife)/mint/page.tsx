import { InfiniteMovingCardsDemo } from "@/app/components/InfitintSc";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-5 mt-5">
      <header className="text-center p-2 bg-[#222] ">
        <h1 className="text-2xl font-bold mb-5 p-5">
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

      <div>
        <InfiniteMovingCardsDemo />
      </div>

      <div className="bg-[#222] p-10 drop-shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center capitalize mb-5">
          Want to start, get started with your own erc-721 token
        </h2>

        <div className="bg-[#111] p-3 rounded-lg flex flex-col gap-5">
          <p>
            Each ERC-721 token is different in its own way. You can see it as
            &ldquo;captures a moment where you are able to bend light transform
            it into something colorful.&ldquo; At the same time you can see
            design that creates a new type of energy that you are able to use to
            power much great hardware and machinary. As much as create.
          </p>

          <p>
            By minting these tokens you will be able to set them aside to be
            able to earn a special photune clump token where you will be able to
            use later towards our tools.
          </p>

          <p>
            There are a few very rare unique ones that are yet to be minted. If
            you are looking for something unique and rare you can try to mint it
            through main contract or you can try your luck trading it with
            others on the open market.
          </p>
        </div>

        <div className="bg-[#111] p-3 rounded-lg flex flex-col gap-5">
          <p>
            You are able to use this token inside our generator to be able to
            collect the clump token. Sending the token to the generator will
            allow you to earn token based on the APY. You will be able to also
            use your token to create lp pools with other tokens but that will
            have to very with the rest of the nft holders.
          </p>

          <p>
            These generators will will start of as two and will expand those who
            apply will be able to get a chance to create their own vault that
            will allow others to stake a certain token.
          </p>

          <p>
            Be sure to hodl your tokens and stay tune for the next collection to
            come soon. This will allow others to join a special window.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
