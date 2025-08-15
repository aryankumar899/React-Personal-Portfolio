import React from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavBarLinks() {
  return (
    <ul
      className="
        flex flex-col gap-4 text-white font-bold text-center
        md:flex-row md:gap-6
        md:relative md:bg-black
        absolute top-[110%] left-1/2 -translate-x-1/2 w-full bg-gray-800/80 backdrop-blur-lg p-4 rounded-lg
        md:w-auto md:p-0 md:rounded-none
        md:text-xl text-lg
      "
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          <a
            href="#"
            className="cursor-pointer text-white hover:text-cyan-400 transition-all duration-500 block"
          >
            {link.link}
          </a>
          <div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
}

export default NavBarLinks;
