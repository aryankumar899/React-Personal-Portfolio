import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
function NavbarBtn() {
  return (
    <div>
      <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-500 border flex items-center gap-1 bg-gradient-to-r from-white to-cyan-600 hover:border-orange-400 hover:scale-110 duration-500 hover:shadow-[0_0_60px_0_rgba(94,206,220,0.5)]
] '>
        Hire Me <GoArrowDownRight />
      </button>
    </div>
  )
}

export default NavbarBtn
