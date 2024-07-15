import LandingPage from '@/app/page'
import React from 'react'
import Header from '@/app/components/LandingPage/Header'
import Cards1 from './Cards/CardLayer1'

const Index = () => {
  return (
    <div>
      <div className='headerbg'>
        <Header />
      </div>
      <Cards1 />
    </div>
  )
}

export default Index
