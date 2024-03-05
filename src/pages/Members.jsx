import React from 'react'
import CardMember from '../components/CardMember'
import { RiRadioButtonLine } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";

const Members = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <section className='w-full h-full max-w-7xl mx-auto flex flex-col gap-y-12'>
        <div className='flex flex-col items-start'>
          <h2 className='font-black text-5xl uppercase p-0'>Conocenos</h2>
          <div class="text-center">
            <span class="inline-block w-40 h-1.5 rounded-full bg-naranja"></span>
          </div>
        </div>
        <p className='w-11/12 text-lg text-start'>En esta sección conocerán los perfiles de nuestros profesionales altamente capacitados en sus respectivas areas. El icono <div className='inline-flex text-celeste text-2xl'><FaPeopleRoof /></div> significa que el profesional está disponible presencialmente, y el icono <div className='inline-flex text-green-500 text-2xl'><RiRadioButtonLine /></div> que está disponible de forma on-line.</p>
        <div>

        </div>
        <div>
          <CardMember />
        </div>
      </section>
    </div>
  )
}

export default Members