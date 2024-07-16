import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footerbg h-56'>
      <h1 className='uppercase text-[#25564b] text-center py-10 text-[18px]'>Sunnyside</h1>
      <div className="flex justify-center gap-10 text-sm text-[#25564b]">
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/">Projects</Link>
      </div>

      <div className="flex justify-center gap-5 pt-10 text-sm text-[#25564b]">
        <Link href="/"><Image src="/icon-facebook.svg" width={18} height={18} alt='logo' /></Link>
        <Link href="/"><Image src="/icon-instagram.svg" width={18} height={18} alt='logo' /></Link>
        <Link href="/"><Image src="/icon-twitter.svg" width={18} height={18} alt='logo' /></Link>
        <Link href="/"><Image src="/icon-pinterest.svg" width={18} height={18} alt='logo' /></Link>
      </div>
    </div>
  )
}

export default Footer
