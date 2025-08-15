import React from 'react';
import HeroText from './HeroText';
import HeroPic from './HeroPic';
import HeroGradient from './HeroGradient';
import SubHeroSec from './SubHeroSec';

const HeroMain = () => {
  return (
    <div className="pt-32 pb-12 px-4">
      <div
        className="
          w-full flex flex-col md:flex-row
          max-w-[1100px] mx-auto justify-between items-center
         rounded-lg p-6 gap-8
        "
      >
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
