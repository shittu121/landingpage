import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  content: string;
  imageurl: string;
}

const Card2: React.FC<CardProps> = ({ title, content, imageurl }) => {
  return (
    <div className="lg:flex md:flex sm:flex block gap-20 w-[100%] relative">
      <Image src={imageurl} className="w-[100%] lg:h-full md:h-full sm:h-full h-[35rem]" width={50} height={50} alt="cardlogo" />
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-64">
        <h1 className={`text-2xl font-bold text-center  ${title === "Graphic design" ? 'text-[#25564b]' : 'text-[#fad400]'}`}>{title}</h1>
        <p className="text-[18px] lg:text-[13px] text-center py-2 w-48">{content}</p>
      </div>
    </div>
  );
}

export default Card2;
