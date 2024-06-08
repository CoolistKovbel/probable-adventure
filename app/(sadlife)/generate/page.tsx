import GeneratorSection from "@/app/components/generator-section";
import React from "react";

const Page = () => {
  return (
    <section className="w-full min-h-screen bg-[#333]">

      <header className="p-5 text-center mb-4 mt-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          PhotuneLightway Generator
        </h1>
        <p className="md:text-md text-gray-300">
          If you support and own and nft you can see something extra
        </p>
      </header>

      {true && (
        <div className="p-4">
          <h2 className="text-2xl">currently down ....</h2>
        </div>
      )}

      {/* <GeneratorSection /> */}
    </section>
  );
};

export default Page;
