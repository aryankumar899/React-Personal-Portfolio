import React from 'react'
import ContactForm from './ContactForm'

const contactMeLeft = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      <div>
        <h2 className="text-cyan-500 text-2xl sm:text-3xl mb-3 sm:mb-4">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-white">
          Feel free to reach out if you'd like to collaborate
          <br className="hidden sm:block" />
          you are just a few clicks away!
        </p>
      </div>
      <ContactForm />
    </div>
  )
}

export default contactMeLeft
