import React from 'react'

const HeroGradient = () => {
  return (
    <div>
      <div className='  shadow-[10px_10px_100px_120px_rgba(255,255,255,0.5)] absolute top-0 right-[400px] -z-10 animate-pulse'></div>

      <div className=' shadow-[10px_10px_100px_120px_rgba(0,255,255,0.5)] absolute top-0 right-0 -z-10 animate-pulse'></div>


      <div className='  shadow-[10px_10px_100px_120px_rgba(0,255,255,0.5)] absolute top-[200px]  left-0 -z-10 animate-pulse'></div>

<div className=' shadow-[10px_10px_100px_120px_] rgba(255,255,255,0.5) absolute top-[400px] left-0 -z-10 animate-pulse'></div>
    </div>
  ) 
}

export default HeroGradient
