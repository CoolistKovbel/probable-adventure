import Image from "next/image";
import MintPage from "./components/mintPage";
import SimpleSwapPage from "./components/simpleSwapPage";
import Genereate from "./components/generate";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center flex-col text-white">
      
      <section className="flex items-center justify-between flex-col  gap-5 ">

        <header className="w-full bg-[#111] p-10 drop-shadow-lg flex items-center justify-around mx-auto md:flex-row flex-col gap-5">

          <div className="w-full md:w-[40%] text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 capitalize">
              Be the particle that bends light
            </h2>

            <p className="text-gray-500 mb-5">
              At times, everything gets hard, but its what you do with
              everything that you may take in, and its what you when you let
              out. Coming to this dApp feel free to mint, stake, and not miss
              out on rewards.
            </p>

            <Link
              href="/about"
              className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold w-full text-center"
            >
              Learn More
            </Link>
          </div>

          <div className="w-[300px] h-[300px] relative">
            <Image
              src="/lightwalk.png"
              className="rounded-lg drop-shadow-lg"
              alt="capture the moment and ge the nft to be able to get in earl access to future projects"
              fill
            />
          </div>
        </header>

        <MintPage />

        <SimpleSwapPage />

        <Genereate />
      </section>
      
    </main>
  );
}
