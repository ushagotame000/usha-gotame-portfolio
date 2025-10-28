"use client";
import React from "react";
import { motion } from "framer-motion";
import SmartCounter from "./SmartCounter";

const Hero: React.FC = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center px-10 space-y-6 md:space-y-0 md:space-x-12">
      {/* Text Side with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text w-2/3"
      >
        <h1 className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white">
          👋 Hi There! I'm
          <span className="text-blue-600 dark:text-blue-400 px-3 lg:text-4xl md:text-3xl text-2xl font-mono">
            Usha Gotame
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          A passionate{" "}
          <span className="font-semibold">Frontend Developer </span>
          specializing in{" "}
          <span className="font-semibold">
            React.js, Next.js, and Tailwind CSS
          </span>
          . I create modern, responsive, and user-friendly web experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg transition duration-300">
          View My Work
        </button>
      </motion.div>

      {/* Image Side with Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/profile.jpg"
          alt="My Profile"
          className="w-80 h-80 object-cover rounded-full shadow-lg"
        />
      </motion.div>
      
    </div>


  );
};

export default Hero;
