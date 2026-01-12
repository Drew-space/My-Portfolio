import React from "react";
import { skillItem } from "../constants/data";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl lg:leading-tight font-semibold">
          Essential Tools i use{" "}
        </h2>

        <p className="text-zinc-400 mt-8 max-w-[50ch] ">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map(
            (
              {
                imgSrc,
                label,
                desc,
                classes,
              }: {
                imgSrc: string;
                label: string;
                desc: string;
                classes?: string; // optional
              },
              key
            ) => (
              <SkillCard
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes={classes}
                key={key}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skill;
