"use client";
import React from "react";
import { icons } from "../constants/assets";
const skillList = [
  { label: "React", icon: icons.ReactIcon },
  { label: "TypeScript", icon: icons.Typescript },
  { label: "Tailwind", icon: icons.Tailwind },
  { label: "HTML", icon: icons.Html },
  { label: "Css", icon: icons.Css },
  { label: "Bootstrap", icon: icons.Bootstrap },
  { label: "Git", icon: icons.Git },
  { label: "Node.js", icon: icons.Node },
  { label: " MongoDb", icon: icons.Mongodb },
];

const Skill: React.FC = () => {
  return (
    <>
      <div className="px-10">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center md:py-10 py-5">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center item-center">
          {skillList.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-md"
              >
                <IconComponent className="w-12 h-12 text-green-500" />
                <p className="mt-2 text-lg text-white">{skill.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;
