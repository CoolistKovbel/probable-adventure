import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainFooter = () => {
  return (
    <footer className='w-full flex items-center p-10 bg-[#111] mt-10 rounded-md drop-shadow-lg w-full justify-between flex-col md:flex-row gap-4 md:gap-0'>

        <header className='flex items-center '>

            <div>
                <div className='flex items-center gap-4 mb-2 md:flex-row flex-col'>
                    <h3 className='text-4xl font-bold'><Link href="/">PhotuneLightway</Link></h3>
                    <Image src="/photune2.png" alt='hate my life' width={100} height={100} className='rounded-full' />
                </div>
                <p className='text-md text-gray-500'>
                    Capture the moment, start your journey through crypto safely here.
                </p>
            </div>

        </header>

        <div className='bg-[#111] p-2 rounded-lg drop-shadow-lg w-[140px]'>
            <h3 className='text-2xl font-bold text-center mb-2'>Links</h3>
            <nav className='flex items-center flex-col gap-2'>
                <Link href="/about" className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold w-full text-center">About</Link>
                <Link href="/about" className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold w-full text-center">Trade</Link>
                <Link href="/about" className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold w-full text-center">Mint</Link>
                <Link href="/about" className="p-2 bg-[#222] rounded-md hover:bg-[#444] font-bold w-full text-center">Generate</Link>
            </nav>
        </div>

  </footer>
  )
}

export default MainFooter