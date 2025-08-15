import React from 'react';

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-12 w-12 border border-cyan-500 text-white rounded-full p-3 flex items-center justify-center hover:bg-cyan-500 transition"
    >
      <Icon className="text-2xl" />
    </a>
  );
};

export default SingleContactSocial;
