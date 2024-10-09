import React from "react";
import Badge from "./Badge";

export default function ProjectCard({ img, name, desc, skills, link, github }) {
  return (
    <div className="sm:w-[100%] lg:w-[955px] bg-white dark:bg-dark-dbgri rounded-xl flex gap-4 items-center shadow-card-shadow">
      <img src={img} alt="" className="h-[360px] w-[360px] rounded-l-xl" />
      <div className="flex flex-col gap-6 p-8">
        <h2 className="font-bold text-3xl text-light-purple dark:text-dark-pclil">{name}</h2>
        <div className="dark:text-white">{desc}</div>
        <div className="flex gap-2">
          {skills.map((skill,index) => (
            <Badge key={index} text={skill} />
          ))}
          {/* <Badge text="redux" />
          <Badge text="vercel" /> */}
        </div>
        <div className="flex gap-6">
          <a href={link} className="underline font-medium dark:text-light-green">
            View Site
          </a>
          <a href={github} className="underline font-medium dark:text-light-green">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
