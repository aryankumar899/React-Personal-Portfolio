import React from 'react'
import { Link } from 'react-scroll'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" }
];

const FooterMain = () => {
  return (
    <div className='px-4'>
      <div className='w-full h-[1px] bg-lime-100 mt-24'></div>

      {/* Responsive Flexbox: vertical on mobile, horizontal on desktop */}
      <div className='flex flex-col sm:flex-col md:flex-row justify-between items-center gap-4 mt-4 max-w-[1200px] mx-auto'>
        <p className='text-3xl text-lime-100'>Aryan Kumar</p>

        <ul className='flex flex-wrap justify-center gap-4 text-lime-100 text-xl'>
          {links.map((link, index) => (
            <li key={index} className='group'>
              <Link
                to={link.section}
                smooth={true}
                duration={500}
                spy={true}
                className='hover:text-white transition-all duration-500 cursor-pointer'
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className='max-w-[1200px] mx-auto text-center md:text-right mt-2 mb-12 text-sm text-lime-100'>
        2025 Aryan | All copyright Reserved
      </p>
    </div>
  )
}

export default FooterMain
