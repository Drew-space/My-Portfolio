"use client";

import { Button } from "@/components/ui/button";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr] ">
        <h1 className="invisible ">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
          </Link>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className=" md:hidden w-10 h-10 grid  place-items-center rounded-md bg-zinc-50/10  ring-inset ring-1 ring-zinc-50/2 backdrop-blur-2xl hover:bg-zinc-50/15 transition [transform, background-color] active:scale-95 "
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span>{navOpen ? <XIcon /> : <Menu />}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <Link
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          <Button variant="outline" className="text-black">
            Contact Me
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
