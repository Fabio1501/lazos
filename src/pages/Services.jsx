import React from 'react'
import CardService from '../components/CardService'
import { services } from '../constantes/services'

const Services = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <section className='w-full h-full max-w-5xl mx-auto flex flex-col gap-y-12 items-start'>
        <h2 className='font-black text-5xl uppercase p-0'>SERVICIOS</h2>
        <p className='text-lg text-start w-11/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corporis natus, ipsum consequuntur, id quia delectus itaque animi pariatur qui, nobis minima amet unde dolorem distinctio incidunt magnam velit doloremque.</p>
        <div className='flex flex-wrap gap-12'>
          {
            services.map(service => {
              return (
                <CardService link={service.link} icon={service.icon} text={service.text} title={service.title} />
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Services