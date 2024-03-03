import React from 'react'
import { Link } from 'react-router-dom'
import masaje from '../assets/masaje.png'
import psicologia from '../assets/autismo.png'
import fonoaudilogia from '../assets/terapia-musical.png'
import kinesiologia from '../assets/kinesiologia.png'
import Review from './Review';

function Home() {
  return (
    <section className='w-full h-full max-w-7xl mx-auto flex flex-col items-center'>
      <div className={`relative w-full rounded-3xl`}>
        <div className='w-full h-full rounded-3xl bg-gradient-to-r from-[#02AEF6] via-[#02aef6]/20  to-transparent absolute flex items-start'>
          <div className=' w-1/2 flex flex-col gap-y-5 p-16 text-start'>
            <h1 className='text-5xl font-bold leading-[64px]'>
              TE AYUDAMOS A <br />
              ENCONTRARTE
            </h1>
            <p className='text-lg'>
              Lazos es un lugar que aloja, sostiene, acompaña y al mismo tiempo, es una apuesta a pensar-nos y encontrarnos permanentemente en función de lo colectivo, la familia, la escuela, el trabajo y los diferentes ámbitos en los que nos desenvolvemos.
            </p>
          </div>
          <div></div>
        </div>
        <img src="https://i.postimg.cc/TPdwdvzL/hero-image-lazos.png" className={` rounded-3xl w-full`} alt="" />
      </div>
      <div className='absolute -bottom-12 bg-white w-3/4 h-64 shadow-xl rounded-3xl flex justify-between items-start py-10'>
        <div className='h-full pl-16 pr-8 w-1/2 flex flex-col justify-between items-start'>
          <Review></Review>
          
          {/* <div className="flex -space-x-4 rtl:space-x-reverse">
              <img className="w-10 h-10 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
              <img className="w-10 h-10 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
              <img className="w-10 h-10 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
              <Link className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600" to="/">+9</Link>
            </div> */}
        </div>
        <div className='h-full pr-16 pl-8 w-1/2 flex flex-col justify-between items-start'>
          <div className='w-full flex items-end justify-between'>
            <h3 className='text-4xl font-black'>Servicios</h3>
            <Link to={'/'} className='text-naranja font-bold hover:underline'>Ver más...</Link>
          </div>
          <div className='w-full flex items-center justify-between gap-x-8'>
            <div className='flex flex-col items-center gap-y-4 text-[#FC5f23]'>
              <div className='text-4xl border rounded-lg p-4'>
                <img src={psicologia} alt="" />
              </div>
              <p className='font-bold uppercase text-black text-sm'>Psicología</p>
            </div>
            <div className='flex flex-col items-center gap-y-4 text-[#FFDA08]'>
              <div className='text-4xl border rounded-lg p-4'>
                <img src={masaje} alt="" />
              </div>
              <p className='font-bold uppercase text-black text-sm'>Fisioterapia</p>
            </div>
            <div className='flex flex-col items-center gap-y-4 text-[#02AEF6]'>
              <div className='text-4xl border rounded-lg p-4'>
                <img src={kinesiologia} alt="" />
              </div>
              <p className='font-bold uppercase text-black text-sm'>Kinesiologia</p>
            </div>
            <div className='flex flex-col items-center gap-y-4 text-[#FC5f23]'>
              <div className='text-4xl border rounded-lg p-4'>
                <img src={fonoaudilogia} alt="" />
              </div>
              <p className='font-bold uppercase text-black text-sm'>Fonoaudiologia</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home