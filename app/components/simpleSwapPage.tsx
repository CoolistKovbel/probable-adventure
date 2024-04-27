"use client";

import Link from "next/link";

const SimpleSwapPage = () => {
  const handleSwap = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ETHAmount = formData.get("ETH");
    const NCTAmount = formData.get("NCT");

    try {
      console.log("swapping tokens");
      console.log(`ETH ${ETHAmount}, NCT ${NCTAmount}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full p-4 bg-[#444] drop-shadow-lg rounded-md">
      <header className="mb-4">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-4xl font-bold mb-2">Swap Now</h2>
          <Link
            href="/"
            className="text-4xl hover:bg-[#111] text-center rounded-lg"
          >
            <i>📍</i>
          </Link>
        </div>
        <p className="text-gray-300 p-2">
          Convert your Native ETH token into our special NueroClump to be able
          to create a source to pulse through space fuel the path for others
        </p>
      </header>

      {/* Swap form */}
      <form
        className="p-4 flex  flex-col bg-[#222] rounded-md drop-shadow-lg gap-4"
        onSubmit={handleSwap}
      >
        <label htmlFor="ETH" className="flex  flex-col gap-2">
          <span className="bg-[#111] p-1 inline-block rounded-lg">
            Ethereum
          </span>
          <input
            type="number"
            id="ETH"
            name="ETH"
            placeholder="enter amount"
            className="bg-[#111] p-2 text-white drop-shadow-lg rounded-md text-white font-mono"
          />
        </label>

        <i className="text-[4rem] p-2 mx-auto">🔄</i>

        <label htmlFor="NCT" className="flex  flex-col gap-2">
          <span className="bg-[#111] p-1 inline-block rounded-lg">
            NeruoClumpToken
          </span>
          <input
            type="number"
            id="NCT"
            name="NCT"
            placeholder="enter amount"
            className="bg-[#111] p-2 text-white drop-shadow-lg rounded-md text-white font-mono"
          />
        </label>

        <button className="p-2 bg-[#999] rounded-lg font-bold uppercase hover:bg-[#444]">
          swap
        </button>
      </form>
    </div>
  );
};

export default SimpleSwapPage;
