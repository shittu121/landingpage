import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className='flex justify-between py-5'>
        <Image src="logo.svg" className='ml-5' width={100} height={100} alt="logo" />
        <div className="items-center gap-10 text-sm text-white lg:flex md:flex sm:flex hidden">
          <Link href="/">About</Link>
          <Link href="/service">Services</Link>
          <Link href="/project">Projects</Link>
          <Link href="/contact" className='bg-white font-semibold text-black p-2 px-5 rounded-[20px] mr-5'>Contact</Link>
        </div>
    </header>
    <div className="flex">
       <h1 className='m-auto text-[3rem] text-center font-bold uppercase text-white mt-3 lg:mt-0'>We are creatives</h1>
    </div>
    <div className="flex">
      <Image src="icon-arrow-down.svg" className='m-auto mt-12 lg:mt-12 w-[40px] lg:w-[28px] h-[130px] lg:h-[100px]' width={28} height={40} alt='arrow' />
    </div>
    </div>
    
  )
}

export default Header
