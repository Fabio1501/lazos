import React, { useEffect, useState } from 'react'
import { aboutUs } from '../constantes/aboutUs';


const AboutUs = () => {

  const [itemSelected, setItemSelected] = useState({})

  useEffect(() => {
    setItemSelected({ ...aboutUs[1], isActive: true });
  }, [])

  const selectItem = (item) => {
    setItemSelected({ ...item, isActive: true });
  }

  return (
    <section className='mt-12 w-full h-full max-w-5xl mx-auto flex flex-col items-center'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-1/2 flex flex-col items-start gap-y-6 text-start'>
          <div className='relative flex flex-col items-start'>
            <h2 className='font-black text-3xl'>{itemSelected?.title}</h2>
            <div className="text-center ">
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
                      <img src={item.icon} alt="" />
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