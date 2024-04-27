import Link from "next/link";
import React from "react";

const Genereate = () => {
  const gen = [
    {
      type: "manuel-compound",
      apy: 100,
      recentProfit: 23,
      totalStaked: 12345678,
      token: "NCT",
    },
    {
      type: "auto-compound",
      apy: 20,
      recentProfit: 123,
      totalStaked: 345678,
      token: "NCT",
    },
    {
      type: "NFT auto-compound",
      apy: 30,
      recentProfit: 123,
      totalStaked: 12,
      token: "PLCT",
    },
  ];

  return (
    <div className="w-full p-4 bg-[#444] drop-shadow-lg rounded-md">
      <header className="mb-4">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-4xl font-bold mb-2">Particle Becon</h2>
          <Link
            href="/"
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
        {gen.map((item: any) => (
          <div
            key={crypto.randomUUID()}
            className="bg-[#111] mb-3 drop-shadow-lg rounded-md"
          >
            <header className="mb-2 p-4">
              <h2 className="text-2xl font-bold capitalize">{item.type}</h2>
              <p className="text-sm">Total staked: {item.totalStaked}</p>
            </header>

            <p className="text-2xl font-bold text-center">
              APY: <span>{item.apy}</span>
            </p>

            <div className="p-4">
              <p className="text-sm bg-[#222] p-3 text-white bg-[#444] mb-3">
                Earned:
                <span className="ml-2 ">{item.recentProfit}</span>
              </p>

              <button className="bg-[#333] p-2 drop-shadow-lg w-full text-center hover:bg-[#222] rounded-md">
                claim
              </button>
            </div>

            <div className="p-4 bg-[#000]">
              <p className="mb-2">Staked: {item.recentProfit}</p>

              <div className="w-full flex items-center justify-between">
                <button className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md">
                  add
                </button>
                <button className="bg-[#333] p-2 drop-shadow-lg  text-center hover:bg-[#222] rounded-md">
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
