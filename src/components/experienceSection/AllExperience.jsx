import React from 'react';
import SingleExperince from './SingleExperince';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variant';

const experiences = [
  {
    job: 'Python With Machine Learning',
    company: 'LifeTech Solutions',
    date: 'Oct 2024- Nov 2025',
    responsibilities: [
  "Completed On-the-Job Training in Python and Machine Learning.",
  "Worked on data visualization projects using tools like Matplotlib and Seaborn.",

]

  },
  {
    job: 'Front-End Developer',
    company: 'The Crafters',
    date: 'May-2025- Present',
    responsibilities: [
      'Designed and developed responsive front-end interfaces for client projects.',
      'Collaborated on branding projects, integrating custom graphics.',
   
    ],
  },
  {
    job: 'Full Stack Developer',
    company: 'SRNBS Services Fondation',
    date: 'July-2025- Present',
    responsibilities: [
      'Developed and maintained web applications using MERN stack.',
      'Implemented RESTful APIs and integrated third-party services.',
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-20 object-fill">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperince experince={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn('right', `0.${index}`, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              {/* Large screen arrow */}
              <FaArrowRight className="text-6xl text-cyan-500 mx-2 hidden md:block" />
              {/* Small screen divider */}
              <div className="block md:hidden w-[2px] h-8 bg-cyan-500 my-4"></div>
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
