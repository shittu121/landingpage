import LandingPage from '@/app/page'
import React from 'react'
import Header from '@/app/components/LandingPage/Header'
import Cards from './Cards'
import Footer from './Footer'


const Index = () => {
  return (
    <div>
      <div className='headerbg'>
        <Header />
      </div>
      <Cards />
      <Footer />
    </div>
  )
}

export default Index
