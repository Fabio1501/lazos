import React from 'react'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'
import Faq from '../components/Faq'

function Landing() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-y-56'>
      <Home></Home>
      <AboutUs></AboutUs>
      <Faq></Faq>
    </div>
  )
}

export default Landing