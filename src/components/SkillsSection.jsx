import React from "react";
import Title from "./Title";
import { skillsLeft } from "../data";
import { skillsRight } from "../data";

function SkillList() {
  return (
    <div className="flex gap-36 mt-[84px] mb-[96px] justify-center w-full">
      <Title text={"Skills"} textSize={"text-5xl"} color={"text-purple"} />

      <div className="flex justify-center gap-36 ">
        <div className="flex gap-9 flex-col">
          {skillsLeft.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 text-2xl text-gray font-semibold"
            >
              <img
                className={`w-32 h-32 rounded-md ${
                  skill.backgroundColor ? skill.backgroundColor : ""
                }`}
                src={skill.icon}
                alt={skill.title}
              />
              <div>{skill.title}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-9 flex-col">
          {skillsRight.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 text-2xl text-gray font-semibold"
            >
              <img
                className="w-32 h-32 rounded-md "
                src={skill.icon}
                alt={skill.title}
              />
              <div>{skill.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillList;
