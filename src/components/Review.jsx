import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Review = ({name, lastName, profession, image, text}) => {
  return (
    <figure className="slide-left flex flex-col items-start gap-y-4">
      <figcaption className="flex items-center space-x-3 rtl:space-x-reverse">
        <img className="w-10 h-10 rounded-full" src={image} alt="profile picture" />
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300">
          <cite className="pe-3 font-medium text-gray-900">{name} {lastName}</cite>
          <cite className="ps-3 text-sm text-gray-500">{profession}</cite>
        </div>
      </figcaption>
      <blockquote>
        <p className="w-11/12 text-sm font-semibold text-gray-900 text-start">"{text}"</p>
      </blockquote>
      <Link to={'/members'} className='flex items-center gap-x-2 border rounded-xl px-4 py-2 bg-naranja'>
        <span className='text-md font-bold uppercase text-white'>Contactanos</span>
        <div className='rounded-full text-white flex items-center justify-center text-3xl font-bold'>
          <GoArrowRight />
        </div>
      </Link>
    </figure>

  )
}

export default Review