import { skills } from "./data.jsx";
import SkillsCard from "./SkillsCard";
import React from "react";

interface Skill {
  id: string;
  icon: React.ReactNode;
  text: string;
}

interface SkillsProps {
  onMouseEnter: (text: string) => void;
  onMouseLeave: () => void;
}

const Skills: React.FC<SkillsProps> = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div className="w-full flex justify-center">
      <section className="py-5">
        {/* All skills icons on one line, centered */}
        <div className="gap-1 flex flex-wrap justify-center -mt-4">
          {(skills as Skill[]).map((skill) => {
            return (
              <button
                id={skill.id}
                key={skill.id}
                onMouseEnter={() => onMouseEnter(skill.text)}
                onMouseLeave={onMouseLeave}
                className="animate-box1"
              >
                <article className="duration-300">
                  <span className="text-gray-700 hover:text-gray-400 transition-colors duration-300">
                    {skill.icon}
                  </span>
                </article>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Skills; 