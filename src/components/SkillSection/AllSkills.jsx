import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactbootstrap } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import SingleSkill from "./SingleSkill";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variant';

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: FaJs,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
    {
    skill: "Node Js",
    icon: FaNodeJs,
  },
   {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "R Bootstrap",
    icon: SiReactbootstrap,
  },
   {
    skill: "Laravel",
    icon: FaLaravel,
  },
];
const AllSkills = () => {
  return <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">

    {skills.map((item,index)=>{
        return( 
        <motion.div variants={fadeIn("up",`0.${index}`, 0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0}}>
        <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>

</motion.div>

        );
    
    }


)}


  </div>;
};

export default AllSkills;
