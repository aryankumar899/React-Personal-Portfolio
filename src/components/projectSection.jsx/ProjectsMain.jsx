import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variant';
 
const projects=[
    {
    name:"Learning Hub Ed-Tech Platform",
    year:"2025",
    align:"right",
    image:"https://img.freepik.com/free-photo/learn-learning-education-studying-concept_53876-120493.jpg?uid=R197718872&ga=GA1.1.455586014.1739431620&semt=ais_hybrid&w=740",
    link:"#"
    },
    {
    name:"Personal Portfolio",
    year:"2025",
    align:"left",
    image:"https://img.freepik.com/free-photo/businessman-working-laptop_53876-40325.jpg?uid=R197718872&ga=GA1.1.455586014.1739431620&semt=ais_hybrid&w=740",
    link:"#"
    },
    {
    name:"Medical Card Transaction Management System",
    year:"2024",
    align:"right",
    image:"https://img.freepik.com/free-photo/expressive-young-doctor-posing-winter-holidays_140725-141118.jpg?uid=R197718872&ga=GA1.1.455586014.1739431620&semt=ais_hybrid&w=740",
    link:"#"
    },
       {
    name:"Student Management System",
    year:"2024",
    align:"left",
    image:"https://img.freepik.com/free-photo/businesswoman-discussing-with-disabled-woman_482257-2402.jpg?uid=R197718872&ga=GA1.1.455586014.1739431620&semt=ais_hybrid&w=740",
    link:"#"
    },

]
const ProjectsMain = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4'>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}}>
        <ProjectText/>
      </motion.div>

      <div className='flex flex-col gap-10 sm:gap-16 md:gap-20 max-w-full sm:max-w-[700px] md:max-w-[900px] mx-auto'>
        {projects.map((item,index)=>(
          <SingleProject  
            key={index} 
            name={item.name} 
            year={item.year} 
            align={item.align} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsMain
