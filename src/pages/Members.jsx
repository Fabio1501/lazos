import React from 'react'
import CardMember from '../components/CardMember'
import { RiRadioButtonLine } from "react-icons/ri";
import isabelOvejero from '../assets/isabel-ovejero.jpg'

const members = [
  {
    name: "Isabel",
    lastName: "Ovejero",
    profession: "Psicóloga",
    online: true,
    celPhone: "+543865559022",
    image: isabelOvejero
  },
  {
    name: "Viyina",
    lastName: "Rodriguez",
    profession: "Psicóloga",
    online: false,
    celPhone: "+543865559022",
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
  },
  {
    name: "María",
    lastName: "Mameli",
    profession: "Psicóloga",
    online: false,
    celPhone: "+543865559022",
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg"
  },
  {
    name: "Fabio",
    lastName: "Carabajal",
    profession: "Psicóloga",
    online: true,
    celPhone: "+543865559022",
    image: "https://fabidev.vercel.app/assets/FabiDEV%20sin%20fondo2-5be26c75.png"
  }
]

const Members = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <section className='w-full h-full max-w-7xl mx-auto flex flex-col gap-y-12'>
        <div className='flex flex-col items-start'>
          <h2 className='font-black text-5xl uppercase p-0'>Conocenos</h2>
          <div className="text-center">
            <span className="inline-block w-40 h-1.5 rounded-full bg-naranja"></span>
          </div>
        </div>
        <p className='w-11/12 text-lg text-start'>En esta sección conocerán los perfiles de nuestros profesionales altamente capacitados en sus respectivas areas. Todos nuestros profesionales están disponibles presencialmente, el icono <div className='inline-flex text-green-500 text-2xl'><RiRadioButtonLine /></div> significa que también están disponibles de forma online.</p>
        <div className='flex flex-wrap gap-12'>
          {
            members.map(member => {
              return(
                <CardMember name={member.name} lastName={member.lastName} profession={member.profession} online={member.online} celPhone={member.celPhone} image={member.image}/>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Members