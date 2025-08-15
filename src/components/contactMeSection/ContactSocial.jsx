import React from 'react';
import SingleContactSocial from './SingleContactSocial';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
      <SingleContactSocial link="https://github.com/aryankumar899" Icon={FaGithub} />
      <SingleContactSocial link="https://www.linkedin.com/in/aryan-kumar-18258a273/" Icon={FaLinkedin} />
      <SingleContactSocial link="https://www.geeksforgeeks.org/user/coder_aryan001/" Icon={SiGeeksforgeeks} />
    </div>
  );
};

export default ContactSocial;
