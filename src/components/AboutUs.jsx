import React, { useEffect, useState } from 'react'
import { FaUserDoctor } from "react-icons/fa6";

const aboutUs = [
  {
    id: 1,
    title: "NUESTRA MISION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://i.postimg.cc/Fz1H5ygH/110-Definir-la-mision-y-vision-de-una-empresa.jpg",
    itemsList: [
      {
        text: "lorem ipsum",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum",
        icon: <FaUserDoctor />
      }
    ],
    isActive: false
  },
  {
    id: 2,
    title: "NUESTRA VISION",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://blog.grupo-pya.com/wp-content/uploads/2017/05/imagen1.jpg",
    itemsList: [
      {
        text: "lorem ipsum vision",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum vision",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum vision",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum vision",
        icon: <FaUserDoctor />
      }
    ],
    isActive: false
  },
  {
    id: 3,
    title: "NUESTROS VALORES",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore iste cupiditate vitae hic, ad voluptatibus eveniet voluptas dignissimos magni blanditiis quis laborum, itaque ducimus nulla quisquam tenetur minus minima.",
    img: "https://fx-wolf.com/wp-content/uploads/2020/11/what-is-forex.jpg",
    itemsList: [
      {
        text: "lorem ipsum valores",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum valores",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum valores",
        icon: <FaUserDoctor />
      },
      {
        text: "lorem ipsum valores",
        icon: <FaUserDoctor />
      }
    ],
    isActive: false
  }
]

const AboutUs = () => {

  const [itemSelected, setItemSelected] = useState({})

  useEffect(() => {
    setItemSelected({ ...aboutUs[1], isActive: true });
  }, [])

  const selectItem = (item) => {
    setItemSelected({ ...item, isActive: true });
  }

  return (
    <section className='w-full h-full max-w-7xl mx-auto flex flex-col items-center'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-1/2 flex flex-col items-start gap-y-6 text-start'>
          <div className='relative flex flex-col items-start'>
            <h2 className='font-black text-3xl'>{itemSelected?.title}</h2>
            <div className="text-center mb-10">
              <span className="inline-block w-40 h-1.5 rounded-full bg-naranja"></span>
            </div>
          </div>
          <p>{itemSelected.text}</p>
          <div className='flex flex-wrap gap-8'>
            {
              itemSelected?.itemsList?.map((item, index) => {
                return (
                  <div key={`${item.text} ${index}`} className='flex items-center gap-x-4'>
                    <div className='bg-celeste/20 text-celeste rounded-full p-3 text-3xl'>
                      {item.icon}
                    </div>
                    <span className='text-lg'>{item.text}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='relative w-1/2'>
          <div>
            <div className='relative shadow-2xl mx-auto w-3/4 bg-white p-1.5 rounded-xl z-10'>
              <img className={`rounded-lg w-full h-80`} src={itemSelected?.img} alt="" />
            </div>
            <div className='w-full absolute p-4 flex items-end h-56 -bottom-28 bg-celeste/20 rounded-2xl'>
              <div className='w-full flex items-end justify-center gap-x-6'>
                {
                  aboutUs.map(item => {
                    return (
                      <button key={item.id} onClick={() => selectItem(item)} className={`flex flex-col items-center gap-y-1.5`}>
                        <img className={`rounded-full ${itemSelected.id == item.id ? 'inline w-12 h-12' : 'opacity-50 w-10 h-10'}`} src={item.img} alt="" />
                        <span className={`font-bold ${itemSelected.id == item.id ? 'inline' : 'opacity-0'}`}>{item.title}</span>
                      </button>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs