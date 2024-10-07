import React from "react";
import Badge from "./Badge";

export default function ProjectCard({ img, name, desc, skills, link, github }) {
  return (
    <div className="w-[960px] bg-white rounded-xl flex gap-4 items-center shadow-card-shadow">
      <img src={img} alt="" className="h-[360px] w-[360px]" />
      <div className="flex flex-col gap-6 p-8">
        <h2 className="font-bold text-3xl text-purple">{name}</h2>
        <div>{desc}</div>
        <div className="flex gap-2">
          {skills.map((skill) => (
            <Badge text={skill} />
          ))}
          {/* <Badge text="redux" />
          <Badge text="vercel" /> */}
        </div>
        <div className="flex gap-6">
          <a href={link} className="underline font-medium">
            View Site
          </a>
          <a href={github} className="underline font-medium">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
