"use client";

import { useEffect, useState } from "react";
import {
  NeuronClumpTokenAddress,
  PhotuneLightwayContract,
  getTotalAmountNFTOwn,
  leaveVault,
  userVaultz,
  viewVaults,
} from "../lib/web3";
import { ethers } from "ethers";
import { useModal } from "../hooks/use-modal-store";

import neuronToken from "../lib/abis/token.json";

const GeneratorSection = () => {
  const { onOpen } = useModal();

  const [deVaults, setDeVaults] = useState<any>([]);
  const [userStake, setUserStake] = useState("");
  const [userNFT, setUserNFT] = useState<any>(0);
  const [userApproved, setUserApproved] = useState<boolean>(false);

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

  const HandleCreateVault = async (e: any) => {
    e.preventDefault();
    try {
      onOpen("CreateVault");
    } catch (error) {
      console.log(error);
    }
  };

  // Handle token approval
  const handleTokenApproval = async (e:any) => {
    try {
      setUserApproved(true);
      if (typeof window !== "undefined" && window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const formData = new FormData(e.currentTarget);
        const amount = formData.get("amount") as string

        // Get the signer from the provider
        const signer = provider.getSigner();

        const contractInstance = new ethers.Contract(
          NeuronClumpTokenAddress,
          neuronToken.abi,
          signer
        );
        
        // Wei
        await contractInstance.approve(PhotuneLightwayContract, amount);

      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const int = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer from the provider
        const signer = provider.getSigner();

        // Get the signer's address
        const address = await signer.getAddress();

        const vaults = await viewVaults();
        const userVault = await userVaultz();
        const ownsNFT = await getTotalAmountNFTOwn(address);

        console.log(vaults, "in de clie4nt");
        console.log("userVaults", userVault);

        setUserStake(userVault as string);
        setDeVaults(vaults);
        setUserNFT(ownsNFT);
      }
    };

    int();
  }, []);

  return (
    <div>
      <div>

        <header className="flex items-center justify-between bg-[#222] p-4 drop-shadow-lg rounded-lg mb-3">
          <h2 className="font-bold">Generators</h2>
          <i>🎛️</i>
        </header>

        {userNFT > 0 && (
          <div className=" py-5">
            <button
              onClick={HandleCreateVault}
              className="bg-[#222] p-2 font-bold rounded-lg hover:bg-[#111] border-2"
            >
              Create Vault
            </button>
          </div>
        )}

        <div className="flex items-center justify-between">

          {deVaults &&
            deVaults.map((item: any, index: any) => (
              <div
                key={crypto.randomUUID()}
                className="bg-[#111] mb-3 drop-shadow-lg rounded-md w-[40%]"
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

                  {userApproved ? (
                    <div>hello</div>
                  ) : (
                    
                    <form onSubmit={(e:any) => handleTokenApproval(e)}>
                      <input type="number" placeholder="amount" className="mb-2 p-2 rounded-lg text-black mb-3 w-full" id="amount" name="amount"  />
                      <div className="flex items-center flex-col-reverse gap-3">
                        <p className="text-sm text-gray-500 text-center">please convert your value into wei format remeber 10^18 🍒</p>
                        <button
                          className="bg-[#222] p-2 rounded-lg font-bold drop-shadow-lg "
                        >
                          Approve
                        </button>
                      </div>
                    </form>
             
                  )}

                  <div className="w-full flex items-center justify-between mt-4">
                    <button
                      className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md"
                      onClick={(e: any) => handleVaultAddToken(e, index)}
                      disabled={!userApproved}
                    >
                      add
                    </button>

                    <button
                      className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md"
                      onClick={(e: any) => handleVaultRemoveToken(e, index)}
                      disabled={!userApproved}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
            ))}


        </div>
      </div>
    </div>
  );
};

export default GeneratorSection;
