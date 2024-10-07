import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

function ProjectCardList() {
  const card = {
    img: "card1.png",
    name: "Workintech",
    desc: "A simple, customizable, minimal setup cookie plugin that allows your\
              users to select which cookies to accept or decline. This was created\
              with vanilla JS, SCSS and Parcel Bundler and is available as a NPM\
              package and the git repository makes any type of customization to code\
              and themes possible.",
    skills: ["react", "redux", "vercel"],
    link: "#",
    github: "#",
  };
  const card2 = {
    img: "card2.png",
    name: "2.PROJE",
    desc: "A simple, customizable, minimal setup cookie plugin that allows your\
              users to select which cookies to accept or decline. This was created\
              with vanilla JS, SCSS and Parcel Bundler and is available as a NPM\
              package and the git repository makes any type of customization to code\
              and themes possible.",
    skills: ["react", "redux", "vercel"],
    link: "#",
    github: "#",
  };
  const cards = [card, card2];
  return (
    <div className="flex flex-col gap-6">
      <Title color="text-purple" text="Projects" textSize="text-5xl" />
      {cards.map((card) => (
        <ProjectCard
          name={card.name}
          desc={card.desc}
          skills={card.skills}
          github={card.github}
          img={card.img}
          link={card.link}
          key={card.name}
        />
      ))}
    </div>
  );
}

export default ProjectCardList;
