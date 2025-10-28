"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleBackground =() =>{
    setDarkMode(prev=> !prev);
  }

  return (
    <header
      className={`fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md px-5`}
    >
      <nav className=" flex justify-center items-center py-4 px-6">
        <ul className="flex space-x-6 md:text-xl text-md ">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" className="font-semibold">
              Resume
            </a>
          </li>
        </ul>

        <button
          onClick={toggleBackground}
          aria-label="Toggle background color"
          className={`p-2 rounded-md ml-5 ${darkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-900' }`}        >
          {darkMode ? <IoIosSunny className="" /> : <IoMoonOutline />}
          {darkMode ? 'Black Background' : 'White Background'}
        </button>
      </nav>
    </header>
  );
}
