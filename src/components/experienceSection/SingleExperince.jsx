import React from 'react';

const SingleExperince = ({ experince }) => {
  return (
    <div className="border-2 border-cyan-500 border-dashed rounded-2xl mt-12 px-4 py-6 
                    w-full sm:w-[90%] md:w-[240px] 
                    h-auto md:h-[350px] 
                    flex flex-col justify-between">
      
      <div>
        <p className="font-bold text-white text-lg sm:text-xl">{experince.job}</p>
        <p className="text-cyan-500">{experince.company}</p>
        <p className="text-gray-500">{experince.date}</p>
      </div>

      <ul className="list-disc mt-4 pl-4 text-white space-y-1 text-sm sm:text-base">
        {experince.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleExperince;
