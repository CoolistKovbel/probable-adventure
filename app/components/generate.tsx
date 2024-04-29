"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { viewVaults } from "../lib/web3";
import { useModal } from "../hooks/use-modal-store";

const Genereate = () => {
  const [deVaults, setDeVaults] = useState<any>([])
  const { onOpen } = useModal();

  // Grab all the vaults

  const gen = [
    {
      type: "manuel-compound",
      apy: 100,
      recentProfit: 0,
      totalStaked: 345678,
      token: "NCT",
    },
    {
      type: "auto-compound",
      apy: 20,
      recentProfit: 0,
      totalStaked: 345678,
      token: "NCT",
    },
    {
      type: "NFT auto-compound",
      apy: 30,
      recentProfit: 0,
      totalStaked: 12,
      token: "PLCT",
    },
  ];

  useEffect(() => {

    const int = async () => {
     const vaults =  await viewVaults()

     console.log(vaults, "in de clie4nt");

     setDeVaults(vaults)
    }

    int()

  }, [])


  // console.log("deVaults", deVaults[0])
  // console.log("deVaults apy", deVaults[0][1].toString())
  // console.log("deVaults multiplier", deVaults[0][2].toString())
  // console.log("deVaults date created", deVaults[0][3].toString())
  // console.log("deVaults total amnount staked ", deVaults[0][6].toString())

  const claimTokens = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log("Claiming tokensd")




    } catch (error) {
      console.log(error)
    }
  }

  const handleVaultAddToken = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log("Soryy adding tokens to vault")

      onOpen("CreaateTokenVaultTransfer")
      
    } catch (error) {
      console.log("error")
    }
  }

  const handleVaultRemoveToken = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log("Remove item from vault")




    } catch (error) {
      console.log("error")
    }
  }


  const handleAutoCompound = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log("Inititizing auto compound")






    } catch (error) {
      console.log("error")
    }
  }



  return (
    <div className="w-full p-4 bg-[#444] drop-shadow-lg rounded-md">

      <header className="mb-4">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-4xl font-bold mb-2">Particle Becon</h2>
          <Link
            href="/generate"
            className="text-4xl hover:bg-[#111] text-center rounded-lg"
          >
            <i>📍</i>
          </Link>
        </div>
        <p className="text-gray-300 p-2">
          Use your tokens to generate more. By using your NFT you will be able
          to generate tokens a little faster than our current Particle Becons.
          Be sure spread the light and allow others to find the small particles
          that make up light.
        </p>
      </header>

      <div>
      {deVaults && deVaults.map((item: any) => (
  <div
    key={crypto.randomUUID()}
    className="bg-[#111] mb-3 drop-shadow-lg rounded-md"
  >

    <header className="mb-2 p-4">
      <h2 className="text-2xl font-bold capitalize">{item.vaultType}</h2>
      <p className="text-sm">Total staked: {item[6].toString()}</p>
    </header>

    <p className="text-2xl font-bold text-center">
      APY: <span>{item[1].toString()}%</span>
    </p>

    <div className="p-4">
      <p className="text-sm bg-[#222] p-3 text-white bg-[#444] mb-3">
        Earned:
        <span className="ml-2 ">{0}</span>
      </p>

      <button className="bg-[#333] p-2 drop-shadow-lg w-full text-center hover:bg-[#222] rounded-md"  onClick={claimTokens}>
        claim
      </button>
    </div>

    {/* User */}
    <div className="p-4 bg-[#000]">
      <p className="mb-2">Staked: {0}</p>

      <div className="w-full flex items-center justify-between">
        <button className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md" onClick={handleVaultAddToken}>
          add
        </button>
        <button className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md" onClick={handleVaultRemoveToken}>
          remove
        </button>
      </div>
    </div>


  </div>
))}

      </div>

    </div>
  );
};

export default Genereate;
