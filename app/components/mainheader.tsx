"use client";

import Link from "next/link";
import { useState } from "react";

const MainHeader = () => {
  const [user, setUser] = useState(false);

  const connectWallet = () => {
    try {
      console.log("weeoeeeeooooxs");
      setUser((prev) => !prev);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full bg-[#111] p-5 drop-shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl ">
          <Link href="/">PhotuneLight</Link>
        </h2>

        {user ? (
          <nav className="w-[200px] flex items-center justify-between">
            <Link
              href="/"
              className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold"
            >
              About
            </Link>
            <Link
              href="/"
              className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold"
            >
              Trade
            </Link>
            <Link
              href="/"
              className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold"
            >
              Claim
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
        <div className="flex items-center justify-between">
          <h4>
            Hello, <span>user</span>
          </h4>

          <div className="flex items-center  gap-5">
            <p>Bal: 12345</p>
            <p>converted: 1</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
