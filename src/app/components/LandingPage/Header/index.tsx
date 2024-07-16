"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarSm from './NavbarSm';

const Header: React.FC = () => {
  const [isToggle, setIsToggle] = useState(false);

  function trigger() {
    setIsToggle(!isToggle);
  }

  return (
    <div>
      <header className='flex justify-between py-5 items-center'>
        <Image src="/logo.svg" className='ml-5' width={100} height={100} alt="logo" />
        <div className="hidden lg:flex md:flex items-center gap-10 text-sm text-white">
          <Link href="/">About</Link>
          <Link href="/service">Services</Link>
          <Link href="/project">Projects</Link>
          <Link href="/contact" className='bg-white font-semibold text-black p-2 px-5 rounded-[20px] mr-5'>Contact</Link>
        </div>
        <div className='flex lg:hidden md:hidden mr-5' onClick={trigger}>
          {isToggle ? (
            <Image src="/close.svg" className='' alt='close icon' width={24} height={18} />
          ) : (
            <Image src="/icon-hamburger.svg" className='' alt='menu icon' width={24} height={18} />
          )}
        </div>
      </header>
      {isToggle && (
        <div className="lg:hidden md:hidden block flex-none">
          <NavbarSm />
        </div>
      )}
      <div className="flex">
        <h1 className='m-auto text-[3rem] text-center font-bold uppercase text-white mt-3 lg:mt-0'>We are creatives</h1>
      </div>
      <div className="flex">
        <Image src="/icon-arrow-down.svg" className='m-auto mt-12 lg:mt-12 w-[40px] lg:w-[28px] h-[130px] lg:h-[100px]' width={40} height={130} alt='arrow down' />
      </div>
    </div>
  );
}

export default Header;
