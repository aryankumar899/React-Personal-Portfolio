import React from 'react'

const SingleInfo = ({ Icon, text }) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
      <Icon className="text-3xl"/>
      <span>{text}</span>
    </div>
  )
}

export default SingleInfo
