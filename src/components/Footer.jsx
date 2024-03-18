import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import axios from 'axios'
import Alert from './Alert'

const Footer = () => {
  const [subscribe, setSubscribe] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [hiddenAlertObject, setHiddenAlertObject] = useState({
    isHidden: true,
    text: 'Hubo un error, intentalo de nuevo.',
    isSuccess: false
  })

  const validateEmail = () => {
    if (!subscribe.length) {
      return false
    }

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const dominiosPermitidos = [
      'gmail.com',
      'hotmail.com',
      'yahoo.com',
      'yahoo.es',
      'outlook.com',
      'outlook.es',
    ]
    const dominiosPermitidosRegex = new RegExp(
      `^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`,
      'i',
    )

    if (!regexEmail.test(subscribe)) {
      return false
    }

    if (!dominiosPermitidosRegex.test(subscribe)) {
      return false
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!validateEmail()) {
        setIsValid(false);
        return;
      };
      setIsValid(true);
      const response = await axios.post("https://microservicio-nodemailer.onrender.com/subscribe", { to: subscribe })
      setHiddenAlertObject({
        isHidden: false,
        text: response.data,
        isSuccess: true
      })
      console.log(response);
    } catch (error) {
      console.log(error);
      setHiddenAlertObject({
        isHidden: false,
        text: '¡Hubo un error al suscribirte!',
        isSuccess: false
      })
    } finally {
      setTimeout(() => {
        setHiddenAlertObject({
          ...hiddenAlertObject,
          isHidden: true
        })
      }, 3000);
    }
  }

  const handleChange = (e) => {
    setSubscribe(e.target.value)
  }

  return (
    <footer className="bg-white mt-24">
      <div className="mx-auto w-full max-w-5xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-12 me-3" alt="Lazos Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Lazos</span>
            </Link>
            <form
              onSubmit={handleSubmit}
              className="flex items-center w-full max-w-md">
              <div className="relative w-full mr-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input
                  id="member_email"
                  className="formkit-input border bg-white focus:bg-white border-gray-400 text-gray-800 text-sm rounded-lg block w-full pl-10 px-5 py-1.5"
                  name="subscribe" placeholder={"Suscribite"} onChange={handleChange} value={subscribe} />
                <span className={`absolute text-sm text-red-700 font-semibold -bottom-6 ${!isValid ? 'block' : 'hidden'}`}>La dirección es inválida.</span>
              </div>
              <button className="formkit-submit">
                <span className="px-3 py-1.5 font-medium text-center text-white bg-naranja/90 rounded-lg cursor-pointer border hover:bg-naranja">Enviar</span>
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Recursos</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Flowbite</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Tailwind CSS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Seguinos</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline ">Github</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2024 <Link to="/" className="hover:underline">Lazos™</Link>. Todos los derechos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to="/" className="text-gray-500 hover:text-gray-900">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900 ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900 ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="/" className="text-gray-500 hover:text-gray-900 ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
      <Alert hiddenAlertObject={hiddenAlertObject} />
    </footer>

  )
}

export default Footer