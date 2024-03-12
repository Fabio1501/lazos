import React from 'react'


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
      
    </figure>

  )
}

export default Review