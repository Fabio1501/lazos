import React from 'react'

function Home() {
  return (
    <section className='w-full h-full max-w-7xl mx-auto flex flex-col items-center'>
      <div className={`relative w-full rounded-3xl`}>
        <div className='w-full h-full rounded-3xl bg-gradient-to-r from-[#Fc6b23] to-transparent absolute'></div>
        <img src="https://i.postimg.cc/6qC79CC1/home-lazos.jpg" className={` rounded-3xl w-full`} alt="" />
      </div>
      <div className='absolute -bottom-12 bg-white rounded-3xl w-3/4 h-64 shadow-xl'></div>
    </section>
  )
}

export default Home