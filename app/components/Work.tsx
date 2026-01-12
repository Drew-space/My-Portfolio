import React from "react";
import PortfolioCard from "./PortfolioCard";
import { works } from "../constants/data";

const Work = () => {
  return (
    <section id="work" className="section mt-5 mb-5">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl lg:leading-tight font-semibold">
          My Recent Works
        </h2>
        <div className="grid gap-x-4 gap-y-6 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))] ">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <PortfolioCard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
