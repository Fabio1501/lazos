import React from 'react'
import { Link } from 'react-router-dom'

const CardService = ({ icon, title, text, link }) => {
  return (
    <Link to={link} className="max-w-72 p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-start hover:scale-[1.05] hover:shadow-md">
      <img className="w-10 h-10 text-gray-500 mb-3" src={icon} alt="" />
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{title}</h5>
      <p className="text-sm mb-3 font-normal text-gray-500 text-start">{text}</p>
    </Link>
  )
}

export default CardService