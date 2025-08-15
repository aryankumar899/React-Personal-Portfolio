import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'
const contactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
       <img src='https://img.freepik.com/free-vector/mail-sent-concept-illustration_114360-96.jpg?uid=R197718872&ga=GA1.1.455586014.1739431620&semt=ais_hybrid&w=740' alt='contact-me' className='max-w-[300px]'/>
    <ContactInfo/>
    <ContactSocial/>

      
    </div>
  )
}

export default contactMeRight
