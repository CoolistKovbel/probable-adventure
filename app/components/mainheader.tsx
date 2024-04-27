"use client";

import Link from "next/link";
import { useState } from "react";
import { getBlockNum, getEthereumAccount } from "../lib/web3";
import Image from "next/image";

const MainHeader = () => {
  const [user, setUser] = useState(false);
  const [userAccount, setUserAccount] = useState("")
  const [userBal, setUserBal] = useState<any>("")

  const connectWallet = async () => {
    try {
      console.log("weeoeeeeooooxs");
      const account = await getEthereumAccount()
      const userBal = await getBlockNum();
      
      if(account){
        setUser((prev) => !prev);
        setUserAccount(account)
      }

      setUserBal(userBal)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full bg-[#111] p-5 drop-shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl flex items-center gap-4">
          <Link href="/">PhotuneLightway</Link>
          <Image src="/photune2.png" alt='hate my life' width={100} height={100} className='rounded-full' />
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
            className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold"
            onClick={connectWallet}
          >
            Connect Now
          </button>
        )}
      </div>

      {user && (
        <div className="flex items-center justify-between border-t-2 p-3">
          <h4>
            Hello, <span>{userAccount.substring(0, 7)}</span>
          </h4>

          <div className="flex items-center  gap-5">
            <p>Bal: {userBal.toString().slice(0, 4)}</p>
            <p>converted: 1</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
