"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { convertEthToNCT } from "../lib/web3";
import { ethers } from "ethers";

const SimpleSwapPage = () => {
  const [ETHAmount, setETHAmount] = useState<any>("");
  const [NCTAmount, setNCTAmount] = useState<any>("");
  const tokenPerEth = 100;

  // Function to handle ETH amount change
  const handleETHChange = (e: any) => {
    const amount = parseFloat(e.target.value);
    setETHAmount(amount);

    // Calculate the equivalent NCT amount based on the exchange rate
    const calculatedNCTAmount =
      Number(ethers.utils.parseEther(amount.toString())) * tokenPerEth;

    setNCTAmount(ethers.utils.formatEther(calculatedNCTAmount.toString()));
  };

  const handleSwap = async (e: any) => {
    e.preventDefault();

    try {
      console.log("swapping tokens");

      await convertEthToNCT(ETHAmount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full md:w-[95%] mx-auto bg-[#111] drop-shadow-lg rounded-md flex justify-around">

      <header className="mb-4 w-[50%] flex items-center flex-col justify-center">

        <div className="flex items-center justify-between w-full bg-[#222] p-4">
          <h2 className="text-4xl font-bold mb-2">Swap Now</h2>
          <Link
            href="/trade"
            className="text-4xl hover:bg-[#000] p-4 text-center rounded-lg"
          >
            <i>📍</i>
          </Link>
        </div>

        <p className="text-gray-300 p-2 text-center">
          Convert your Native ETH token into our special NueroClump for a better
          price then the market. Gets your now and grow your bag through our
          generator
        </p>

      </header>

      {/* Swap form */}
      <form
        className="p-4 flex flex-col bg-[#222] rounded-md drop-shadow-lg gap-4 w-[30%]"
        onSubmit={handleSwap}
      >

        <label htmlFor="ETH" className="flex flex-col gap-2">
          <span className="bg-[#111] p-1 inline-block rounded-lg p-4">
            Ethereum
          </span>
          <input
            type="number"
            id="ETH"
            name="ETH"
            placeholder="enter amount"
            step="0.00001"
            min="0.00015"
            max="10"
            value={ETHAmount}
            onChange={handleETHChange}
            className="bg-[#111] p-2 text-white drop-shadow-lg rounded-md text-white font-mono"
          />
        </label>

        <i className="text-[4rem] p-2 mx-auto cursor-pointer">🔄</i>

        <label htmlFor="NCT" className="flex flex-col gap-2">
          <span className="bg-[#111] p-1 inline-block rounded-lg p-4">
            NeruoClumpToken
          </span>
          <input
            type="number"
            id="NCT"
            name="NCT"
            value={NCTAmount}
            disabled
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
