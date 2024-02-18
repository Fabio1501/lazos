import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import NavMobile from './NavMobile'

function NavBar() {

  const [menu, setMenu] = useState(false);
  const [hoverSize, setHoverSize] = useState(false);

  const hover = () => {
    setHoverSize(true)
  }

  const hover2 = () => {
    setHoverSize(false)
  }

  return (
    <header className="bg-[#FFEC9E] absolute top-16 flex flex-row justify-between items-center gap-y-8 w-full px-8 lg:pl-72 lg:pr-32 lg:py-4 py-8 text-black">
      <Link to='/' className=''>
        <img src={logo} className="w-24" alt="logo" />
      </Link>
      <nav className="lg:flex gap-x-12 hidden">
        <Link to='/' className='flex gap-x-1 items-center text-xl'>
          <span>Inicio</span>
        </Link>
        <Link to='/' className='flex gap-x-1 items-center text-xl'>
          <span>Sobre nosotros</span>
        </Link>
        <Link to='/' className='flex gap-x-1 items-center text-xl'>
          <span>Contacto</span>
        </Link>
        <Link to='/' onMouseEnter={hover} onMouseLeave={hover2} className='relative flex flex-col gap-x-1 items-center text-xl'>
          <span>Servicios</span>
          <div className={`${!hoverSize ? '' : 'arrow z-[100]'}`}></div>
          <div className={`absolute top-10 z-10 bg-[#FFD014] divide-gray-100 rounded-2xl w-44 ${!hoverSize ? 'hidden' : ''}`}>
            <ul className={`py-2 text-sm mx-auto text-gray-700 bg-[#FFD014] rounded-2xl`}>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">Settings</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">Earnings</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100">Sign out</a>
              </li>
            </ul>
          </div>
        </Link>
      </nav>
      <NavMobile menu={menu} setMenu={setMenu}></NavMobile>
      {menu && (
        <div className='fixed left-0 top-0 h-screen w-full bg-black/50 backdrop-blur-2xl z-10'>
          <ul className='flex lg:hidden items-center justify-center h-full w-full flex-col gap-y-16 text-lg font-medium'>
            <nav className="flex flex-col lg:flex-row gap-y-12 xl:gap-x-12">
              <Link to='/' className='flex gap-x-1 items-center text-xl hover:text-green-600'>
                <span>Inicio</span>
              </Link>
              <Link to='/' className='flex gap-x-1 items-center text-xl hover:text-green-600'>
                <span>Sobre nosotros</span>
              </Link>
              <Link to='/' className='flex gap-x-1 items-center text-xl hover:text-green-600'>
                <span>Contacto</span>
              </Link>
              <Link to='/' className='flex gap-x-1 items-center text-xl hover:text-green-600'>
                <span>Servicios</span>
              </Link>
            </nav>
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavBar
