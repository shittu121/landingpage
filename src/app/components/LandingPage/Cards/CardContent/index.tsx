import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  content: string;
  link: string;
  imageurl: string;
  reverse?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, link, imageurl, reverse = false }) => {
  return (
    <section>
      <div className={`lg:flex md:flex sm:flex block ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="card1 lg:w-[50%] md:w-[50%] sm:w-[50%] w-full lg:h-[20rem] md:h-full sm:h-full h-full m-auto border">
          <div className="w-48 mx-auto my-[5rem]">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm lg:text-[7.5px] m-auto py-2">{content}</p>
            <Link href="/" className="text-sm font-semibold">
              {link}
            </Link>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-[50%] sm:w-[50%] w-full lg:h-[40%] md:h-full sm:h-full">
          <Image src={imageurl} className="w-[100%] lg:h-[20rem] object-cover md:h-full sm:h-full h-full" width={50} height={50} alt="cardlogo" />
        </div>
      </div>
    </section>
  );
};

export default Card;
