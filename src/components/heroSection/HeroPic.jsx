import React from 'react'
import { LuCircle } from "react-icons/lu";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variant';

const HeroPic = () => {
  return (
    <motion.div  variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}} className='h-full flex items-center justify-center'>
      
      <div className='relative flex items-center justify-center max-w-[450px] w-full'> {/* responsive max width */}
        <img 
          src="/images/aryan.png" 
          className='w-full h-auto object-contain' 
          alt="Hero" 
        />

        <div className='absolute inset-0 flex justify-center items-center -z-10 animate-pulse'>
          <LuCircle className='h-full w-full text-cyan-400 blur-md animate-[spin_20s_linear_infinite]' />
        </div>   
      </div>

    </motion.div>
  )
}

export default HeroPic
