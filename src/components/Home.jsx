import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import masaje from '../assets/masaje.png'
import psicologia from '../assets/autismo.png'
import fonoaudilogia from '../assets/terapia-musical.png'
import kinesiologia from '../assets/kinesiologia.png'
import Review from './Review';
import isabelOvejero from '../assets/isabel-ovejero.jpg'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const reviewsData = [
  {
    id: 1,
    name: "Isabel",
    lastName: "Ovejero",
    profession: "Psicóloga",
    image: isabelOvejero,
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  },
  {
    id: 2,
    name: "Hernán",
    lastName: "Galván",
    profession: "Fisioterapeuta",
    image: isabelOvejero,
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  },
  {
    id: 3,
    name: "Rene",
    lastName: "Rivas",
    profession: "Médico clínico",
    image: isabelOvejero,
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  }
]

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
    <section className='w-full h-full max-w-7xl mx-auto flex flex-col items-center'>
      <div className={`relative w-full rounded-3xl`}>
        <div className='w-full h-full rounded-3xl bg-gradient-to-r from-[#02AEF6] via-[#02aef6]/20  to-transparent absolute flex items-start'>
          <div className='w-1/2 flex flex-col gap-y-5 px-16 py-12 text-start'>
            <h1 className='text-5xl font-bold leading-[64px]'>
              TE AYUDAMOS A <br />
              ENCONTRARTE
            </h1>
            <p className='text-lg'>
              Lazos es un centro de rehabilitación e inclusion escolar, que integra la salud y la educación como condición inalienable. Ofrece diversos servicios de rehabilitación diseñados para ayudar a las personas a recuperar y mejorar capacidades físicas, mentales o cognitivas, afectadas por una lesion, enfermedad o discapacidad transitoria o permanente.
            </p>
          </div>
          <div></div>
        </div>
        <img src="https://i.postimg.cc/TPdwdvzL/hero-image-lazos.png" className={` rounded-3xl w-full`} alt="" />
      </div>
      <div className='absolute -bottom-12 bg-white w-3/4 h-64 shadow-xl rounded-3xl flex justify-between items-start py-10'>
        <div className='relative group h-full pl-24 pr-8 w-1/2 flex flex-col justify-between items-start'>
          <div onClick={handleClickLeftArrow} className='hidden absolute left-10 top-1/2 text-2xl text-gray-700 hover:text-black hover:cursor-pointer hover:scale-110 group-hover:block'><MdKeyboardArrowLeft /></div>
          <div onClick={handleClickRightArrow} className='hidden absolute right-10 top-1/2 text-2xl text-gray-700 hover:text-black hover:cursor-pointer hover:scale-110 group-hover:block'><MdKeyboardArrowRight /></div>
          <Review name={reviewsData[index].name} lastName={reviewsData[index].lastName} profession={reviewsData[index].profession} image={reviewsData[index].image} text={reviewsData[index].text} />
        </div>
        <div className='h-full pr-16 pl-8 w-1/2 flex flex-col justify-between items-start'>
          <div className='w-full flex items-end justify-between'>
            <h3 className='text-4xl font-black'>Servicios</h3>
            <Link to={'/'} className='text-naranja font-bold hover:underline'>Ver más...</Link>
          </div>
          <div className='w-full flex items-center justify-between gap-x-8'>
            <div className='flex flex-col items-center gap-y-4'>
              <div className='text-4xl border rounded-lg p-4'>
                <img src={psicologia} alt="" />
              </div>
              <p className='font-bold text-black text-sm'>Psicología</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
              <div className='text-4xl border rounded-lg p-4'>
                <img src={masaje} alt="" />
              </div>
              <p className='font-bold text-black text-sm'>Fisioterapia</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
              <div className='text-4xl border rounded-lg p-4'>
                <img src={fonoaudilogia} alt="" />
              </div>
              <p className='font-bold text-black text-sm'>Fonoaudiología</p>
            </div>
            <div className='flex flex-col items-center gap-y-4'>
              <div className='text-4xl border rounded-lg p-4'>
                <img src={kinesiologia} alt="" />
              </div>
              <p className='font-bold text-black text-sm'>Kinesiología</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home