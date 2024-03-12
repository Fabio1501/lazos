import React from 'react'

const FormContact = () => {
  return (
    <form className="w-11/12 flex flex-col items-start gap-y-6">

      <div className="w-full mx-auto">
        <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 text-start">Email</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="name@flowbite.com" />
        </div>
      </div>


      <div className="w-full mx-auto">
        <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 text-start">Asunto</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-4 h-4 dark:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></svg>
          </div>
          <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="name@flowbite.com" />
        </div>
      </div>


      <div className="w-full mx-auto">
        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 text-start">Su mensaje</label>
        <textarea id="message" rows="4" className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full" placeholder="Leave a comment..."></textarea>
      </div>


      <button type="submit" className="text-white bg-naranja/80 hover:bg-naranja focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5">Enviar mensaje</button>
    </form>

  )
}

export default FormContact