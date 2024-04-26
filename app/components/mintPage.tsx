import Image from "next/image";
import React from "react";

const MintPage = () => {
  return (
    <div className="w-full p-4 bg-[#444] drop-shadow-lg rounded-md">
      <header className="w-full mb-2">
        <h2 className="text-3xl font-bold">Mint Now</h2>
        <p className="text-gray-300">
          Get your first NFT collectors item where you will be able
          to not only be able to use for whatever your heart desires but also be
          able to get and earn NueroClump token where you will be able to use
          for more cases later.
        </p>
      </header>

      <div className="w-[300px] h-[300px] relative ">
        <Image src="/photune-coll.png" alt="stupif collection" fill />
      </div>

      <div>
        <h2 className="text-2xl font-bold">De First Collection</h2>
        <p>
          Over 222 tokens within the collection allow you to be able to setup
          for minting to be able to earn more token.
        </p>

        <form className="flex items-center gap-5">
          <input
            type="number"
            id="tAmount"
            name="tAmount"
            className="bg-[#111] p-2 text-white  "
          />
          <button className="p-2 bg-[#999] rounded-lg font-bold uppercase">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MintPage;
