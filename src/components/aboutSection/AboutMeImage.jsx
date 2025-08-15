import React from 'react'

const AboutMeImage = () => {
  return (
    <div className="relative h-[350px] w-[220px] sm:h-[400px] sm:w-[260px] md:h-[500px] md:w-[300px] mx-auto md:mx-0">
      <div className="absolute rounded-[60px] sm:rounded-[80px] md:rounded-[100px] overflow-hidden h-full w-full">
        <img
          src="https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714185.jpg?uid=R197718872&ga=GA1.1.455586014.1739431620&semt=ais_hybrid&w=740"
          alt="about Image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="absolute -z-10 bg-cyan-600 bottom-[-20px] sm:bottom-[-25px] md:bottom-[-30px] left-[-20px] sm:left-[-25px] md:left-[-30px] h-[300px] w-[180px] sm:h-[350px] sm:w-[210px] md:h-[500px] md:w-[250px] rounded-bl-[80px] sm:rounded-bl-[100px] md:rounded-bl-[120px] rounded-tr-[80px] sm:rounded-tr-[100px] md:rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px]">
      </div>
    </div>
  )
}

export default AboutMeImage
