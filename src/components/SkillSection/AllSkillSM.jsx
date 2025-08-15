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
    skill: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "React Bootstrap",
    icon: SiReactbootstrap,
  },
   {
    skill: "Laravel",
    icon: FaLaravel,
  },
];



const AllSkillSM = () => {
  return  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
       {skills.map((item,index)=>{
        return <motion.div variants={fadeIn("up",`0.${index}`, 0.2)} initial="hidden" whileInView="show" viewport={{once:false,amount:0.7}} key={index} className="flex flex-col items-center">
           
               <item.icon className="text-7xl text-cyan-600"></item.icon>
               <p className="text-center mt-4">{item.skill}</p>
        </motion.div>
       })}
    </div>
  
};

export default AllSkillSM;