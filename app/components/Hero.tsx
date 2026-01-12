import Image from "next/image";
import React from "react";
import ButtonPrimary from "./Button";
import ButtonOutline from "./Button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <Image
                src="/images/small2.jpg"
                alt="Hero Image"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 ">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15] headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mb-8 lg:mb-10 ">
            Building Scalable Modern Websites for the Brands
          </h2>

          <div className="flex items-center gap-3">
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon={<ArrowDown />}
            />
          </div>
        </div>

        <div className="hidden lg:block ">
          <figure className="w-full max-[480px] ml-auto rounded-xl ">
            <Image
              src="/images/me.jpg"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
