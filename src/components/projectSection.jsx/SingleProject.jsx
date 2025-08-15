import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variant';

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}}  className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : "md:flex-row-reverse"} justify-end mt-10`}>
      
      <div className={`flex flex-col gap-2 ${align === 'left' ? 'md:items-end text-right' : 'md:items-start text-left'} sm:items-center sm:text-center`}>
        <h2 className='md:text-3xl sm:text-2xl text-cyan-400'>{name}</h2>
        <h2 className='text-xl font-thin text-white font-serif'>{year}</h2>
        <a
          href={link}
          className='text-lg flex items-center gap-1 text-cyan-600 hover:text-white transition-all duration-300'
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>

      <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border-white'>
        <div className='w-full h-full bg-cyan-500 opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
        <img src={image} className='w-full h-full' alt='Project Image' />
      </div>
    </motion.div>
  )
}

export default SingleProject
