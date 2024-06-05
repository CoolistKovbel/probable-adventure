"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlockNum, getEthereumAccount, getTotalAmountNFTOwn } from "../lib/web3";
import Image from "next/image";
import { BigNumber } from "ethers";

const MainHeader = () => {
  const [user, setUser] = useState(false);
  const [userAccount, setUserAccount] = useState("")
  const [userBal, setUserBal] = useState<any>("")
  const [userNFT, setUserNft] = useState<any>("")

  const userBalNumber = BigNumber.isBigNumber(userBal) ? userBal.toNumber() : userBal;


  const connectWallet = async () => {
    try {
      console.log("weeoeeeeooooxs");
      const account = await getEthereumAccount()
      const userBal = await getBlockNum();
      
      if(account){
        setUser((prev) => !prev);
        setUserAccount(account)
        const nfts = await getTotalAmountNFTOwn(account)
        setUserNft(nfts)
      }

      setUserBal(userBal)

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {

    const gg = async () => {
      try {
        console.log("auto log")

        await connectWallet()

        
      } catch (error) {
        console.log(error)
      }
    }

    gg()

  },[])

  return (
    <header className="w-full bg-[#111] p-5 drop-shadow-lg text-white">

      <div className="flex items-center justify-between mb-5 md:flex-row flex-col w-full">

        <h2 className="flex items-center md:gap-4 gap-4 mb-4 md:mb-0 w-full justify-between md:justify-start">
          <Link href="/" className="font-bold text-2xl md:text-3xl">PhotuneLightway</Link>
          <div className="w-[66px] md:w-[100px] h-[66px] md:h-[100px] relative">
            <Image src="/photune2.png" alt='hate my life' fill className="rounded-lg" />
          </div>
        </h2>

        {user ? (
          <nav className="w-[300px] flex items-center justify-between">
            <Link
              href="/about"
              className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold"
            >
              About
            </Link>
            <Link
              href="/trade"
              className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold"
            >
              Trade
            </Link>
            <Link
              href="/mint"
              className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold"
            >
              Mint
            </Link>
            <Link
              href="/generate"
              className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold"
            >
              Generate
            </Link>
          </nav>
        ) : (
          <button
            className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold w-full"
            onClick={connectWallet}
          >
            Connect Now
          </button>
        )}
      </div>

      {user && (
        <div className="flex items-center justify-between border-t-2 p-3 w-full">
          <h4>
            Hello, <span>{userAccount.substring(0, 7)}</span>
          </h4>

          <div className="flex items-center  gap-5">
            <p>Bal: {userBalNumber}</p>
            <p>NFTs: {userNFT}</p>
          </div>
        </div>
      )}

    </header>
  );
};

export default MainHeader;
