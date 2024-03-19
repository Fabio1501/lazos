import React, { useEffect, useState } from 'react'
import { validateEmail } from '../services/emailValidation'
import Alert from './Alert'
import axios from 'axios'

const templateObject = {
  subject: "",
  userEmail: ""
}

const FormContact = () => {

  const [message, setMessage] = useState('')
  const [templateContact, setTemplateContact] = useState(templateObject)
  const [errors, setErrors] = useState({});
  const [hiddenAlertObject, setHiddenAlertObject] = useState({
    isHidden: true,
    text: 'Hubo un error, intentalo de nuevo.',
    isSuccess: false
  })

  const validationErrors = () => {
    let errors = {};

    if (!templateContact.userEmail.length) {
      errors.email = 'Por favor ingresa tu email.'
    }
    console.log(validateEmail(templateContact.userEmail));

    if (!validateEmail(templateContact.userEmail)) {
      errors.email = 'Por favor ingresa una direccion de email válida.'
    }

    return errors;
  }

  useEffect(()=>{
    setErrors(validationErrors(templateContact))
  },[templateContact])

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  function handleChange(e) {
    setTemplateContact({ ...templateContact, [e.target.name]: e.target.value })
    // setErrors(validationErrors({ ...templateContact, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!Object.entries(errors).length) {
        const body = {
          text: message,
          subject: templateContact.subject.length ? templateContact.subject : "Sin asunto",
          userEmail: templateContact.userEmail
        }
        const response = await axios.post("https://microservicio-nodemailer.onrender.com/email", body)
        setHiddenAlertObject({
          isHidden: false,
          text: response.data,
          isSuccess: true
        })
        console.log(response);
      } else {
        setHiddenAlertObject({
          isHidden: false,
          text: '¡Completa los campos obligatorios!',
          isSuccess: false
        })
      }
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

  return (
    <form onSubmit={handleSubmit} className="w-11/12 flex flex-col items-start gap-y-6">

      <div className="w-full mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 text-start">Email</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input onChange={handleChange} name='userEmail' value={templateContact.userEmail} type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="tucorreo@gmail.com" />
        </div>
      </div>
      {errors.email && <span className="text-start text-red-500 -mt-4 text-sm">{errors.email}</span>}


      <div className="w-full mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 text-start">Asunto</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4 dark:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></svg>
          </div>
          <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="tucorreo@gmail.com" />
        </div>
      </div>


      <div className="w-full mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 text-start">Su mensaje</label>
        <textarea onChange={handleMessage} id="message" rows="4" className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full" placeholder="Escribe tu mensaje..."></textarea>
      </div>


      <button type="submit" className="text-white bg-naranja/80 hover:bg-naranja focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5">Enviar mensaje</button>
      <Alert hiddenAlertObject={hiddenAlertObject} />
    </form>

  )
}

export default FormContact