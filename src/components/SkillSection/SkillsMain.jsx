import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillSM from "./AllSkillSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>

        {/* Large screens */}
        <div className="hidden lg:flex absolute bottom-[50px] left-1/2 -translate-x-1/2">
          <AllSkills />
        </div>

        {/* Small & medium screens */}
        <div className="block lg:hidden mt-12">
          <AllSkillSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
