import React from "react";
import { aboutItems } from "../constants/data";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="pt-20 lg:pt-32  mt-5 mb-5">
      <div className="container">
        <div className=" bg-zinc-800/50 p-7  rounded-2xl md:p-12">
          <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
            Welcome! I&apos;m Chukwuka, a professional web developer with a
            knack for creafting visually stunning and highly functional
            websites. Combining creativity and technical expertise. I transform
            your vision into digital masterpiece that excels in both appearance
            and performance
          </p>
          <div className="flex  flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div className="invisible" key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl  ">
                    {number}{" "}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl ">
                    +{" "}
                  </span>
                </div>
                <p>{label}</p>
              </div>
            ))}
            <Image
              className="invisible"
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
