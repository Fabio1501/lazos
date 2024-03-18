import React from 'react'
import FormContact from '../components/FormContact'

const Contact = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-between'>
      <section className='w-full h-full max-w-5xl mx-auto flex items-center'>
        <div className='w-1/2'>
          <FormContact />
        </div>
        <div class="w-1/2 h-96">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1378.7251194968044!2d-65.61557606210071!3d-27.4274886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423c4622e48059f%3A0x94bd8ecbd8e938d3!2sInstituto%20Medico%20Aguilares!5e1!3m2!1ses-419!2sar!4v1710267999260!5m2!1ses-419!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-xl h-full w-full'></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact