import isabelOvejero from '../assets/isabel-ovejero.jpg'
import kinesiologia from '../assets/kinesiologia.png'
import fonoaudilogia from '../assets/terapia-musical.png'
import {generarUUID} from '../services/generateUUID'

export const reviewsData = [
  {
    id:generarUUID(),
    name: "Isabel",
    lastName: "Ovejero",
    profession: "Psicóloga",
    image: isabelOvejero,
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  },
  {
    id:generarUUID(),
    name: "Hernán",
    lastName: "Galván",
    profession: "Fisioterapeuta",
    image: kinesiologia,
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  },
  {
    id:generarUUID(),
    name: "Rene",
    lastName: "Rivas",
    profession: "Médico clínico",
    image: fonoaudilogia,
    text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
  }
]