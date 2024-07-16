"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from './CardContent'
import Card2 from './CardContent/card2'
import Testimonial from '../Testimonial'
import Card3 from './CardContent/card3'

const Cards1 = () => {
  const cardsData = [
    {
        title: "Transform your brand",
        content: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        link: "Learn more",
        imageurl: "/image-transform.jpg",
        reverse: false
    },
    {
      title: "Stand out to the right audience",
      content: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
      link: "Learn more",
      imageurl: "/image-stand-out.jpg",
      reverse: true,
  }
  ]

  const cardsData2 = [
    {
        title: "Graphic design",
        content: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
        link: "Learn more",
        imageurl: "/image-graphic-design.jpg",
        reverse: false
    },
    {
      title: "Photography",
      content: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      link: "Learn more",
      imageurl: "/image-photography.jpg",
      reverse: true,
    },
  ]

  const profileData = [
    {
        title: "Emily R.",
        description: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        profileimg: "/image-emily.jpg",
        subtitle: "Chief Operating Officer"
    },
    {
      title: "Thomas S.",
      description: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      profileimg: "/image-thomas.jpg",
      subtitle: "Marketing Director"
    },
    {
      title: "Jennie F.",
      description: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      profileimg: "/image-jennie.jpg",
      subtitle: "Business Owner"
    },
  ]

  return (
    <div>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content}
          link={card.link} imageurl={card.imageurl}  reverse={card.reverse}                  
        />
      ))}
      
      <div className="lg:flex md:flex sm:flex block">
        {cardsData2.map((card, index) => (
          <Card2 key={index} title={card.title} imageurl={card.imageurl} content={card.content}                
          />
        ))}
      </div>

      <section>
        <div className="text-center mt-20 mb-10">
          <span className='text-[18px] uppercase font-light'>Client testimonials</span>
        </div>
        <div className="lg:flex md:flex sm:flex block justify-center">
          {profileData.map((card, index) => (
              <Testimonial key={index} title={card.title} subtitle={card.subtitle} profileimg={card.profileimg} description={card.description}                
              />
          ))}
        </div>
      </section>

      <Card3 />
    </div>
  )
}

export default Cards1
