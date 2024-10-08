import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

function ProjectCardList() {
  const card = {
    img: "card11.png",
    name: "PIZZA ORDER FORM",
    desc: "A simple, customizable, minimal setup cookie plugin that allows your\
              users to select which cookies to accept or decline. This was created\
              with vanilla JS, SCSS and Parcel Bundler and is available as a NPM\
              package and the git repository makes any type of customization to code\
              and themes possible.",
    skills: ["react", "redux", "vercel"],
    link: "https://pizzaorderform-b4q8iglhx-aysenayydins-projects.vercel.app",
    github: "https://github.com/aysenayydin/pizzaorderform",
  };
  const card2 = {
    img: "card12.png",
    name: "REDUX WATCLIST",
    desc: "A simple, customizable, minimal setup cookie plugin that allows your\
              users to select which cookies to accept or decline. This was created\
              with vanilla JS, SCSS and Parcel Bundler and is available as a NPM\
              package and the git repository makes any type of customization to code\
              and themes possible.",
    skills: ["react", "redux", "vercel"],
    link: "https://fsweb-s10g3-redux-watchlist-solution-b747y5dii.vercel.app",
    github: "https://github.com/aysenayydin/fsweb-s10g3-redux-watchlist-solution",
  };
  const cards = [card, card2];
  return (
    <div className="flex flex-col gap-6">
      <Title color="text-light-purple dark:text-light-green" text="Projects" textSize="text-5xl" />
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
