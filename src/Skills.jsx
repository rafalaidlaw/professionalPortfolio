import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const [name, setName] = useState(
    "These are the languages I have worked in. Click icon for more info."
  );
  const { colors } = useTheme();
  
  const handleClick = (text) => {
    setName(text);
    console.log(this);
  };
  return (
    <div
      className={`${colors.bg[300]} border-b-2 ${colors.border[500]} max-w-7xl`}
      onMouseLeave={() =>
        handleClick(
          "These are the languages I have worked in. Click icon for more info."
        )
      }
    >
      <div className={`border-r-2 ${colors.border[300]}`}>
        <div className={`border-l-2 ${colors.border[300]}`}>
          <div className={`border-b-2 ${colors.border[500]}`}>
            <div className={`border-r-2 ${colors.border[300]}`}>
              <div className={`border-l-2 ${colors.border[300]}`}>
                <div className={`border-b-2 ${colors.border[500]}`}>
                  <div className={`border-r-2 ${colors.border[300]}`}>
                    <div className={`border-l-2 ${colors.border[300]}`}>
                      <div className={`border-b-2 ${colors.border[500]}`}>
                        <div className={`border-r-2 ${colors.border[300]}`}>
                          <div className={`border-l-2 ${colors.border[300]}`}>
                            <div className={`border-b-2 ${colors.border[500]}`}>
                              <div className={`border-r-2 ${colors.border[300]}`}>
                                <div className={`border-l-2 ${colors.border[300]}`}>
                                  <div className={`border-b-2 ${colors.border[500]}`}>
                                    <div className={`border-r-2 ${colors.border[300]}`}>
                                      <div className={`border-l-2 ${colors.border[300]}`}>
                                        <div className={`border-b-2 ${colors.border[500]}`}>
                                          <div className={`border-r-2 ${colors.border[300]}`}>
                                            <div className={`border-l-2 ${colors.border[300]}`}>
                                              <div className={`border-b-2 ${colors.border[500]}`}>
                                                <div className={`border-r-2 ${colors.border[300]}`}>
                                                  <div className={`border-l-2 ${colors.border[300]}`}>
                                                    <div className={`border-b-2 ${colors.border[500]}`}>
                                                      <div className={`border-r-2 ${colors.border[300]}`}>
                                                        <div className={`border-l-2 ${colors.border[300]}`}>
                                                          <div className={`border-b-2 ${colors.border[500]}`}>
                                                            <div className={`border-r-2 ${colors.border[300]}`}>
                                                              <div className={`border-l-2 ${colors.border[300]}`}>
                                                                <div className={`border-b-2 ${colors.border[500]}`}>
                                                                  <section className={`py-5 align-element ${colors.bg[400]}`}>
                                                                    <SectionTitle
                                                                      text={name}
                                                                      className="min-h-[5rem]"
                                                                    />
                                                                    <div className="py-5 gap-2 flex flex-wrap justify-center">
                                                                      {skills.map(
                                                                        (
                                                                          skill
                                                                        ) => {
                                                                          return (
                                                                            <button
                                                                              id={
                                                                                skill.id
                                                                              }
                                                                              key={
                                                                                skill.id
                                                                              }
                                                                              onClick={() => setName(skill.text)}
                                                                              onMouseEnter={() => setName(skill.text)}
                                                                              onMouseLeave={() => setName("These are the languages I have worked in. Click icon for more info.")}
                                                                              className="animate-box1"
                                                                            >
                                                                              <article className={`${colors.hover[900]} duration-300`}>
                                                                                <span className={`${colors.text[700]} hover:${colors.text[300]} transition-colors duration-300`}>
                                                                                  {
                                                                                    skill.icon
                                                                                  }
                                                                                </span>
                                                                              </article>
                                                                            </button>
                                                                          );
                                                                        }
                                                                      )}
                                                                    </div>
                                                                  </section>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
