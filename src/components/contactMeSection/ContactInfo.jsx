import React from 'react';
import SingleInfo from './SingleInfo';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 text-white w-full items-center sm:items-start text-center sm:text-left">
      <SingleInfo text="princebrwd74785@gmail.com" Icon={MdOutlineEmail} />
      <SingleInfo text="+91 7296096629" Icon={FiPhone} />
      <SingleInfo text="Ranchi , Jharkhand" Icon={SlLocationPin} />
    </div>
  );
};

export default ContactInfo;
