import React, { useEffect, useState } from 'react'
import FaqReut from './FaqReut'

const faq = [
  {
    id: 1,
    title: "NUESTRA MISION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://i.postimg.cc/Fz1H5ygH/110-Definir-la-mision-y-vision-de-una-empresa.jpg",
    isActive: false
  },
  {
    id: 2,
    title: "NUESTRA VISION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://blog.grupo-pya.com/wp-content/uploads/2017/05/imagen1.jpg",
    isActive: false
  },
  {
    id: 3,
    title: "NUESTROS VALORES",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://fx-wolf.com/wp-content/uploads/2020/11/what-is-forex.jpg",
    isActive: false
  }
]

const faq2 = [
  {
    id: 4,
    title: "NUESTRA MISION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://i.postimg.cc/Fz1H5ygH/110-Definir-la-mision-y-vision-de-una-empresa.jpg",
    isActive: false
  },
  {
    id: 5,
    title: "NUESTRA VISION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://blog.grupo-pya.com/wp-content/uploads/2017/05/imagen1.jpg",
    isActive: false
  },
  {
    id: 6,
    title: "NUESTROS VALORES",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://fx-wolf.com/wp-content/uploads/2020/11/what-is-forex.jpg",
    isActive: false
  }
]

const Faq = () => {
  const [dataFaq, setDataFaq] = useState(faq)

  return (
    <div className='max-w-7xl flex flex-col gap-y-8 w-full'>
      <div className='relative flex flex-col items-start'>
        <h2 className='font-black text-3xl'>PREGUNTAS FRECUENTES</h2>
        <div className="text-center mb-10">
          <span className="inline-block w-40 h-1.5 rounded-full bg-naranja"></span>
        </div>
      </div>
      <div className='w-full flex items-start justify-between gap-x-6'>
        <FaqReut faq={faq} style={'w-1/2'}></FaqReut>
        <FaqReut faq={faq2} style={'w-1/2'}></FaqReut>
      </div>
    </div>
  )
}

export default Faq