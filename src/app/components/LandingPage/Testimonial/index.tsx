import Image from 'next/image'
import React from 'react'

interface TestimonialProps{
    profileimg: string,
    description: string,
    title: string,
    subtitle: string,
}

const Testimonial: React.FC<TestimonialProps> = ({ profileimg, description, title, subtitle }) => {
  return (
    <section className='flex justify-center w-full'>
        
            <div className="text-center justify-center w-[50%]">
              <div className="flex justify-center lg:my-5 my-14">
                <Image src={profileimg} alt='logo' className='justify-center items-center rounded-full' width={50} height={50} />
               </div>
               <div className="justify-center text-sm mb-20">
                  <p className='text-[20px] lg:text-[18px] font-extralight mb-10 lg:mb-5'>{description}</p>
                   <h3 className='font-semibold'>{title}</h3>
                   <span className='font-extralight'>{subtitle}</span>
               </div>
            </div>
    </section>
  )
}

export default Testimonial
