import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { services } from '../constantes/services'

const DetailService = () => {
  let { id } = useParams();
  const [idService, setIdService] = useState()
  const [serviceSelected, setServiceSelected] = useState({})

  useEffect(() => {
    setIdService(id)
    console.log(services);
    const service = services.find(service => service.id == id)
    console.log(service);
    setServiceSelected(service)
  }, [])

  return (
    <div>
      <div className='w-full h-full flex flex-col items-center'>
        <section className='w-full h-full max-w-5xl mx-auto flex flex-col gap-y-12'>
          <div className='flex flex-col items-start'>
            <h2 className='font-black text-5xl uppercase p-0'>{serviceSelected.title}</h2>
            <div className="text-center">
              <span className="inline-block w-40 h-1.5 rounded-full bg-naranja"></span>
            </div>
          </div>
          <p className='w-11/12 text-lg text-start'>{serviceSelected.text}</p>
        </section>
      </div>
    </div>
  )
}

export default DetailService