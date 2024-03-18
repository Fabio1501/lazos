import React from 'react'
import { RiRadioButtonLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const CardMember = ({name, lastName, profession, online, celPhone, image}) => {
  return (
    <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow">
      <img className="w-full h-56 rounded-t-lg" src={image} alt="" />
      <div className="p-5 flex flex-col items-start gap-y-3">
        <div className='w-full flex items-center justify-between'>
          <div className='w-full flex flex-col items-start'>
            <div className='w-full flex items-center justify-between'>
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 
            ">{name} {lastName}</h5>
              <div className={`text-green-500 text-xl ${online ? 'block' : 'hidden'}`}>
                <RiRadioButtonLine />
              </div>
            </div>
            <span className='text-lg text-gray-800'>{profession}</span>
          </div>
        </div>
        <p className="mb-3 font-normal text-gray-700 text-start">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link to={`https://api.whatsapp.com/send/?phone=${celPhone}&text=Hola%20${name}%20${lastName}.`} className='w-full flex items-center justify-center gap-x-2 border rounded-xl px-4 py-2 bg-naranja'>
          <span className='text-md text-center font-bold uppercase text-white'>Contactar</span>
        </Link>
      </div>
    </div>

  )
}

export default CardMember