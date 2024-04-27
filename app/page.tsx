import Image from "next/image";
import MainHeader from "./components/mainheader";
import MintPage from "./components/mintPage";
import SimpleSwapPage from "./components/simpleSwapPage";
import Genereate from "./components/generate";
import MainFooter from "./components/mainFoooter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-24">
      <MainHeader />

      <section className="flex items-center justify-between flex-col mt-10 gap-5">

        <header className="w-fullmd:w-[80%] bg-[#111] p-4 rounded-lg drop-shadow-lg flex items-center justify-around mx-auto md:flex-row flex-col gap-5">
        
          <div className="w-[40%] text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-5 capitalize">
              Hold the light and paint a new way
            </h2>

            <p className="text-gray-500 mb-4">
              Own a NFT that will allow you to earn tokens, make you look cool,
              and be able to unlock the next part. Get started and turn nothing
              into something.
            </p>

            <Link href="/about" className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold w-full text-center" >Learn More</Link>
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

        <SimpleSwapPage/>

        <Genereate />

      </section>

      <MainFooter />

    </main>
  );
}
