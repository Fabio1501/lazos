import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Review from './Review';

import { services } from '../constantes/services';
import { reviewsData } from '../constantes/reviews';

import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleClickRightArrow()
    }, 8000);

    return () => clearInterval(intervalId);
  }, [reviewsData.length]);

  const handleClickRightArrow = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handleClickLeftArrow = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section className='w-full h-full max-w-5xl mx-auto flex flex-col items-center'>
      <div className={`relative w-full rounded-xl`}>
        <div className='w-full h-full rounded-xl bg-gradient-to-r from-[#02AEF6] via-[#02aef6]/20  to-transparent absolute flex items-start'>
          <div className='w-2/3 flex flex-col gap-y-3 px-12 py-6 text-start'>
            <h1 className='text-[42px] font-bold leading-[54px]'>
              TE AYUDAMOS A <br />
              ENCONTRARTE
            </h1>
            <p className='w-3/4'>
              Lazos es un centro de rehabilitación e inclusion escolar, que integra la salud y la educación como condición inalienable. Ofrece diversos servicios de rehabilitación diseñados para ayudar a las personas a recuperar y mejorar capacidades físicas, mentales o cognitivas, afectadas por una lesion, enfermedad o discapacidad transitoria o permanente.
            </p>
          </div>
        </div>
        <img src="https://i.postimg.cc/TPdwdvzL/hero-image-lazos.png" className={` rounded-xl w-full`} alt="" />
      </div>
      <div className='absolute -bottom-24 bg-white w-3/4 h-64 shadow-xl rounded-xl flex justify-between items-start py-6 lg:-bottom-32 xl:w-[60%] xl:bottom-6'>
        <div className='relative group h-full pl-16 pr-8 w-1/2 flex flex-col justify-between items-start'>
          <div onClick={handleClickLeftArrow} className='hidden absolute left-6 top-1/2 text-2xl text-gray-700 hover:text-black hover:cursor-pointer hover:scale-110 group-hover:block'><MdKeyboardArrowLeft /></div>
          <div onClick={handleClickRightArrow} className='hidden absolute right-6 top-1/2 text-2xl text-gray-700 hover:text-black hover:cursor-pointer hover:scale-110 group-hover:block'><MdKeyboardArrowRight /></div>
          <div className='flex flex-col gap-y-6'>
            <Review name={reviewsData[index].name} lastName={reviewsData[index].lastName} profession={reviewsData[index].profession} image={reviewsData[index].image} text={reviewsData[index].text} />
            <Link to={'/contact'} className='flex items-center gap-x-1.5 border rounded-lg px-3 py-1.5 bg-naranja w-fit'>
              <span className='text-md font-bold uppercase text-white'>Contactanos</span>
              <div className='rounded-full text-white flex items-center justify-center text-[28px] font-bold'>
                <GoArrowRight />
              </div>
            </Link>
          </div>
        </div>
        <div className='h-full pr-16 pl-8 w-1/2 flex flex-col justify-between items-start'>
          <div className='w-full flex items-end justify-between'>
            <h3 className='text-4xl font-black'>Servicios</h3>
            <Link to={'/'} className='text-naranja font-bold hover:underline'>Ver más...</Link>
          </div>
          <div className='w-full flex items-center justify-between gap-x-6'>
            {
              services.map((service, index) => {
                if(index < 4)
                return (
                  <div className='flex flex-col items-center gap-y-4'>
                    <div className='text-4xl border rounded-lg p-4'>
                      <img src={service.icon} alt="" />
                    </div>
                    <p className='font-bold text-black text-sm'>{service.title}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home