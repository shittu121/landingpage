import React from 'react'
import Image from 'next/image'

const Card3 = () => {
  return (
    <div className='block lg:flex md:flex'>
        <div className="flex w-full lg:w-[50%] md:w-[50%]">
           <Image src="/image-gallery-milkbottles.jpg" className='w-full' alt='logo' width={50} height={50} />
           <Image src="/image-gallery-orange.jpg" className='w-full' alt='logo' width={50} height={50} />
        </div>
        <div className="flex w-full lg:w-[50%] md:w-[50%]">
           <Image src="/image-gallery-cone.jpg" className='w-full' alt='logo' width={50} height={50} />
           <Image src="/image-gallery-sugarcubes.jpg" className='w-full' alt='logo' width={50} height={50} />
        </div>
    </div>
  )
}

export default Card3
