import React from 'react'
import Link from 'next/link'

const NavbarSm = () => {
  return (
    <div className='block absolute w-full'>
      <div className="bg-white h-[30%] w-full block text-center text-2xl py-5">
          <Link href="/" className='block py-3'>About</Link>
          <Link href="/service">Services</Link>
          <Link href="/project" className='block py-3'>Projects</Link>
          <div className="flex py-3">
            <Link href="/contact" className='font-semibold m-auto block bg-[#fad400] text-black p-2 w-[50%] rounded-[20px]'>Contact</Link>
          </div>
      </div>
    </div>
  )
}

export default NavbarSm
