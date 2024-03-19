import isabelOvejero from '../assets/isabel-ovejero.jpg'
import {generarUUID} from '../services/generateUUID'

export const members = [
  {
    id: generarUUID(),
    name: "Isabel",
    lastName: "Ovejero",
    profession: "Psicóloga",
    online: true,
    celPhone: "+543865559022",
    image: isabelOvejero
  },
  {
    id: generarUUID(),
    name: "Viyina",
    lastName: "Rodriguez",
    profession: "Tarotista",
    online: false,
    celPhone: "+543865559022",
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
  },
  {
    id: generarUUID(),
    name: "María",
    lastName: "Mameli",
    profession: "Psicóloga",
    online: false,
    celPhone: "+543865559022",
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg"
  },
  {
    id: generarUUID(),
    name: "Fabio",
    lastName: "Carabajal",
    profession: "Psicóloga",
    online: true,
    celPhone: "+543865559022",
    image: "https://fabidev.vercel.app/assets/FabiDEV%20sin%20fondo2-5be26c75.png"
  }
]