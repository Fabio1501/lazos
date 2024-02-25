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
    <header className="mx-auto max-w-7xl flex flex-row justify-between items-center gap-y-8 w-full lg:py-4 py-8 text-black mb-4">
      <Link to='/' className='flex items-center gap-x-4'>
        <img src={logo} className="w-20" alt="logo" />
        <h1 className='font-bold text-2xl'>Lazos</h1>
      </Link>
      <nav className="lg:flex gap-x-12 hidden">
        <Link to='/' className='flex gap-x-1 items-center text-xl uppercase font-bold rounded-md'>
          <span>Inicio</span>
        </Link>
        <Link to='/' className='flex gap-x-1 items-center text-xl uppercase font-bold'>
          <span>nosotros</span>
        </Link>
        <Link to='/' className='flex gap-x-1 items-center text-xl uppercase font-bold'>
          <span>Contacto</span>
        </Link>
        <Link to='/' onMouseEnter={hover} onMouseLeave={hover2} className='relative flex flex-col gap-x-1 items-center'>
          <span className='text-xl uppercase font-bold'>Servicios</span>
          <div className={`${!hoverSize ? '' : 'arrow z-[100]'}`}></div>
          <div className={`absolute top-10 z-10 bg-[#Fc6b23] divide-gray-100 rounded-2xl w-44 ${!hoverSize ? 'hidden' : ''}`}>
            <ul className={`py-2 text-sm mx-auto bg-[#Fc6b23] rounded-2xl`}>
              <li>
                <Link to="/" className="block py-2 px-4">Dashboard</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-4">Settings</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-4">Earnings</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-4">Sign out</Link>
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
