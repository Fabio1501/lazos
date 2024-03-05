import React from 'react'
import { RiRadioButtonLine } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const CardMember = () => {
  return (
    <div className="max-w-80 bg-white border border-gray-200 rounded-lg shadow">
      <img className="w-full h-64 rounded-t-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="" />
      <div className="p-5 flex flex-col items-start gap-y-3">
        <div className='w-full flex items-center justify-between'>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Isabel Ovejero</h5>
          <div className='flex items-center gap-x-1.5'>
            <div className='text-celeste text-2xl'>
              <FaPeopleRoof />
            </div>
            <div className='text-green-500 text-2xl'>
              <RiRadioButtonLine />
            </div>
          </div>
        </div>
        <p className="mb-3 font-normal text-gray-700 text-start">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link className='w-full flex items-center justify-center gap-x-2 border rounded-xl px-4 py-2 bg-naranja'>
          <span className='text-md text-center font-bold uppercase text-white'>Contactar</span>
        </Link>
      </div>
    </div>

  )
}

export default CardMember