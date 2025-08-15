import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-cyan-500 mb-6 sm:mb-8">
        About Me
      </h2>
      <p className="text-white text-base sm:text-lg leading-relaxed max-w-[90%] sm:max-w-[600px]">
        Hi, I’m Aryan — a passionate and curious Computer Science student with a strong interest in full-stack web development, programming, and emerging technologies like AI and machine learning. I enjoy building projects that combine creativity with functionality, from responsive websites to interactive applications. Skilled in HTML, CSS, JavaScript, React, Node.js, Python, and SQL, I’m always eager to learn new tools and frameworks to improve my craft.
        <br /><br />
        Beyond coding, I love exploring problem-solving challenges, contributing to innovative ideas, and creating solutions that make a real impact. My approach is simple: keep learning, stay consistent, and never stop experimenting.
        <br /><br />
        Whether it’s developing a new feature, optimizing performance, or designing a user-friendly interface, I strive for clean, efficient, and purposeful work. My ultimate goal is to use technology to bring ideas to life and contribute to projects that inspire and help others.
      </p>
      <button className="border border-cyan-700 rounded-full py-2 px-4 text-base sm:text-lg flex items-center mt-6 sm:mt-10 hover:bg-cyan-500 transition-all duration-500 cursor-pointer self-center md:self-start">
        My Projects
      </button>
    </div>
  )
}

export default AboutMeText
