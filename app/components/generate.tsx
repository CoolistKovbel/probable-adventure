"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { leaveVault, userVaultz, viewVaults } from "../lib/web3";
import { useModal } from "../hooks/use-modal-store";
import { ethers } from "ethers";

const Genereate = () => {
  const [deVaults, setDeVaults] = useState<any>([]);
  const [userStake, setUserStake] = useState("");
  const { onOpen } = useModal();

  // Grab all the vaults
  useEffect(() => {
    const int = async () => {
      const vaults = await viewVaults();
      const userVault = await userVaultz();

      console.log(vaults, "in de clie4nt");
      console.log("userVaults", userVault);

      setUserStake(userVault as string);
      setDeVaults(vaults);
    };

    int();
  }, []);


  const claimTokens = async (e: any, vaultId: any) => {
    e.preventDefault();
    try {
      console.log("Claiming tokensd");
    } catch (error) {
      console.log(error);
    }
  };

  const handleVaultAddToken = async (e: any, inde: any) => {
    e.preventDefault();
    try {
      console.log("Soryy adding tokens to vault", inde);

      onOpen("CreaateTokenVaultTransfer", inde);
    } catch (error) {
      console.log("error");
    }
  };

  const handleVaultRemoveToken = async (e: any, vaultId: any) => {
    e.preventDefault();
    try {
      console.log("Soryy adding tokens to vault");

      await leaveVault(vaultId);
    } catch (error) {
      console.log("error");
    }
  };

  const handleAutoCompound = async (e: any, vaultId: any) => {
    e.preventDefault();
    try {
      console.log("Inititizing auto compound");
    } catch (error) {
      console.log("error");
    }
  };

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
        {deVaults &&
          deVaults.map((item: any, index: any) => (
            <div
              key={crypto.randomUUID()}
              className="bg-[#111] mb-3 drop-shadow-lg rounded-md"
            >


              <header className="mb-2 p-4">
                <h2 className="text-2xl font-bold capitalize">
                  {item.vaultType}
                </h2>
                <p className="text-sm">
                  Total staked: {ethers.utils.formatUnits(item[6], "ether")}{" "}
                </p>
              </header>

              <p className="text-2xl font-bold text-center">
                APY: <span>{item[1].toString()}%</span>
              </p>

            {/* c;a */}
              <div className="p-4">
                <p className="text-sm bg-[#222] p-3 text-white bg-[#444] mb-3">
                  Earned:
                  <span className="ml-2 ">{0}</span>
                </p>

                <button
                  className="bg-[#333] p-2 drop-shadow-lg w-full text-center hover:bg-[#222] rounded-md"
                  onClick={(e: any) => claimTokens(e, index)}
                >
                  claim
                </button>
              </div>


              {/* User */}
              <div className="p-4 bg-[#000]">
                <p className="mb-2">Staked: {userStake}</p>

                <div className="w-full flex items-center justify-between">

                  <button
                    className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md"
                    onClick={(e: any) => handleVaultAddToken(e, index)}
                  >
                    add
                  </button>

                  {item.vaultType === "Auto-Compound" && (
                    <button
                      className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md"
                      onClick={(e: any) => handleAutoCompound(e, index)}
                    >
                      auto compound
                    </button>
                  )}

                  <button
                    className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md"
                    onClick={(e: any) => handleVaultRemoveToken(e, index)}
                  >
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
