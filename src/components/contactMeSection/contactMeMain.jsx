import React from 'react'
import ContactMeLeft from './contactMeLeft'
import ContactMeRight from './contactMeRight'

const contactMeMain = () => {
  return (
    <div id="contact" className='max-w-[1200px] mx-auto items-center justify-center -mt-202 pt-8 px-4'>
        <h2 className='text-6xl text-cyan-600 mb-10 text-center mt-20'>Contact Me</h2>
      <div className='flex justify-between gap-24 bg-[#462121fc] p-8 rounded-2xl lg:flex-row sm:flex-col'>

        <ContactMeLeft />
        <ContactMeRight />


        </div>
      
    </div>
  )
}

export default contactMeMain
