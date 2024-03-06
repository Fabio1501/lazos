import React, { useEffect, useState } from 'react'

const FaqReut = ({ faq, style }) => {

  const [dataFaq, setDataFaq] = useState([])

  useEffect(() => {
    setDataFaq(faq)
  }, [])

  const selectItem = (item) => {
    let mapedData = dataFaq.map(faq => {
      if (faq.id == item.id) {
        faq.isActive = !item.isActive
      }
      return faq
    })

    setDataFaq(mapedData)
  }

  return (
    <div className={`${style}`}>
      {
        dataFaq?.map((item, index) => {
          if (index +1 == 1) {
            return (
              <div key={`${item.id}${index}`}>
                <h2>
                  <button onClick={() => selectItem(item)} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl gap-3">
                    <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>{item.title}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                  </button>
                </h2>
                <div className={`${item.isActive ? 'block' : 'hidden'}`}>
                  <div className="p-5 border border-b-0 border-gray-200">
                    <p className="mb-2 text-gray-500">{item.text}</p>
                  </div>
                </div>
              </div>
            )
          } else if (index +1 == 2) {
            return (
              <div key={`${item.id}${index}`}>
                <h2>
                  <button onClick={() => selectItem(item)} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 gap-3">
                    <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>{item.title}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                  </button>
                </h2>
                <div className={`${item.isActive ? 'block' : 'hidden'}`}>
                  <div className="p-5 border border-b-0 border-gray-200">
                    <p className="mb-2 text-gray-500">{item.text}</p>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div>
                <h2>
                  <button onClick={() => selectItem(item)} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 gap-3">
                    <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>{item.title}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                  </button>
                </h2>
                <div className={`${item.isActive ? 'block' : 'hidden'}`}>
                  <div className="p-5 border border-t-0 border-gray-200">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{item.text}</p>
                  </div>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default FaqReut