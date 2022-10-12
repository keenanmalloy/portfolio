import Image from "next/image";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/profilepic.jpg"
        className="relative rounded-full  mx-auto object-cover"
        alt="image"
        height={128}
        width={128}
      />
      <Typewriter
        options={{
          strings: [`Hi, my name is Keenan.`],
          autoStart: true,
          loop: true,
          cursor: "|",
          cursorClassName: "text-[#F7AB0A] text-5xl lg:text-6xl",
          wrapperClassName: "text-5xl lg:text-6xl font-semibold scroll-px-10 ",
        }}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10"></h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
