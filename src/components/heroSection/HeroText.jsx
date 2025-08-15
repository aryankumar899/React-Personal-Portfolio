import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variant';

const HeroText = () => {
  return (
    <div className="flex flex-col h-full justify-center md:text-left text-center px-4">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl md:text-xl text-lg uppercase text-cyan-400"
      >
        Full Stack Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-3xl font-bold text-orange-300 mt-2"
      >
        Aryan Kumar
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg mt-4 text-white"
      >
        A Passionate Full Stack Web Developer
      </motion.p>
    </div>
  );
};

export default HeroText;
