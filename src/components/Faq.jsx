import React, { useEffect, useState } from 'react'
import FaqReut from './FaqReut'
import { faq, faq2 } from '../constantes/faq'



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