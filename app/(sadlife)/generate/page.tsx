import GeneratorSection from "@/app/components/generator-section";
import React from "react";

const Page = () => {
  return (
    <section className="w-full min-h-screen">
      
      <header className="p-5 text-center mb-4 mt-4">
        <h1 className="text-2xl md:text-5xl font-bold mb-2">PhotuneLightway Generator</h1>
        <p className="text-md text-gray-300">If you support and own and nft you can see something extra</p>
      </header>

      <GeneratorSection />
      
    </section>
  );
};

export default Page;
