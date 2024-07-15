"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../CardContent'
import Card2 from '../CardContent/card2'

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
    </div>
  )
}
Function

export default Cards1
