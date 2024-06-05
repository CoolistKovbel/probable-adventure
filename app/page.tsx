import Image from "next/image";
import MainHeader from "./components/mainheader";
import MintPage from "./components/mintPage";
import SimpleSwapPage from "./components/simpleSwapPage";
import Genereate from "./components/generate";
import MainFooter from "./components/mainFoooter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-1  bg-black   bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <MainHeader />

      <section className="flex items-center justify-between flex-col mt-10 gap-5 p-10">
        <header className="w-full md:w-[80%] bg-[#111] p-10 rounded-lg drop-shadow-lg flex items-center justify-around mx-auto md:flex-row flex-col gap-5">
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

      <MainFooter />
    </main>
  );
}
