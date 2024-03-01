import React from 'react'
import Home from '../components/Home'
import AboutUs from '../components/AboutUs'

function Landing() {
  return (
    <div className='w-full h-full flex flex-col gap-y-56 py-12'>
      <Home></Home>
      <AboutUs></AboutUs>
    </div>
  )
}

export default Landing