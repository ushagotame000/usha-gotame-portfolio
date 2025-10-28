"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className=" mx-auto bg-black text-white py-5 px-10 ">
      <div className="text-center ">
        <p className="md:text-base text-sm">
          © Usha Gotame. All rights reserved.
        </p>
      
      </div>

      {/* Right - Social Links */}
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-xl hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-xl hover:text-sky-400 transition duration-300" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl hover:text-blue-600 transition duration-300" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl hover:text-gray-400 transition duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
