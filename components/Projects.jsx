import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Project from "./Project";
import { SocialIcon } from "react-social-icons";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Project
          projectImage="/trackedimage.PNG"
          projectTitle="Tracked"
          projectLink={"https://tracked.gg/"}
          projectLinks={
            <SocialIcon
              className="cursor-pointer"
              url="https://github.com/keenanmalloy/malloy-fitness"
              fgColor="gray"
              bgColor="transparent"
            />
          }
          techImage={
            <div className="flex justify-evenly">
              <Image src="/reactLogo.svg" alt="" width={60} height={60} />
              <Image src="/nextjsLogo.svg" alt="" width={60} height={60} />
              <Image src="/tailwindcss.svg" alt="" width={60} height={60} />
              <Image src="/typescript-icon.svg" alt="" width={60} height={60} />
              <Image src="/postgresql.svg" alt="" width={60} height={60} />
              <Image src="/reactqueryLogo.svg" alt="" width={60} height={60} />
              <Image src="/nodejsLogo.svg" alt="" width={60} height={60} />
            </div>
          }
          projectDescription="
          Build, track, and gain insight into your workouts with a next generation free fitness tracking platform.
"
          projectNumber={1}
        />
        <Project
          projectImage="/macro-app.PNG"
          techImage={
            <div className="flex justify-evenly">
              <Image src="/reactLogo.svg" alt="" width={60} height={60} />
              <Image src="/nextjsLogo.svg" alt="" width={60} height={60} />
              <Image src="/tailwindcss.svg" alt="" width={60} height={60} />
              <Image src="/postgresql.svg" alt="" width={60} height={60} />
              <Image src="/nodejsLogo.svg" alt="" width={60} height={60} />
            </div>
          }
          projectTitle="Macro App"
          projectLink={"https://macro-app.vercel.app/"}
          projectLinks={
            <SocialIcon
              className="cursor-pointer"
              url="https://github.com/keenanmalloy/macro-app"
              fgColor="gray"
              bgColor="transparent"
            />
          }
          projectDescription="
Track your macronutrient intake and visualize your diet progression with our mobile-first next.js app.
"
          projectNumber={2}
        />
        <Project
          projectImage="/fadyslogo.jpg"
          techImage={
            <div className="flex justify-evenly">
              <Image src="/reactLogo.svg" alt="" width={60} height={60} />
              <Image src="/tailwindcss.svg" alt="" width={60} height={60} />
              <Image src="/nextjsLogo.svg" alt="" width={60} height={60} />
            </div>
          }
          projectTitle="Fady's Fades Barbershop website"
          projectLink={"https://fadys-fades-barbershop.vercel.app/"}
          projectLinks={
            <SocialIcon
              className="cursor-pointer"
              url="https://github.com/keenanmalloy/FadysFadesBarbershop"
              fgColor="gray"
              bgColor="transparent"
            />
          }
          projectDescription="
Fady's Fades is a mobile design-first barber shop.
"
          projectNumber={3}
        />
        <Project
          projectImage="/gmail.PNG"
          techImage={
            <div className="flex justify-evenly">
              <Image src="/reactLogo.svg" alt="" width={60} height={60} />
              <Image src="/file-type-css.svg" alt="" width={60} height={60} />
              <Image src="/redux-original.svg" alt="" width={60} height={60} />
              <Image
                src="/file-type-firebase.svg"
                alt=""
                width={60}
                height={60}
              />
              <Image src="/react-router.svg" alt="" width={60} height={60} />
            </div>
          }
          projectTitle="Gmail clone"
          projectLink={"https://clone-5a9e5.web.app/"}
          projectLinks={
            <SocialIcon
              className="cursor-pointer"
              url="https://github.com/keenanmalloy/gmaIl-clone"
              fgColor="gray"
              bgColor="transparent"
            />
          }
          projectDescription="
A clone of the Gmail web app interface.
"
          projectNumber={4}
        />
        <Project
          projectImage="/linkedin.PNG"
          techImage={
            <div className="flex justify-evenly">
              <Image src="/reactLogo.svg" alt="" width={60} height={60} />
              <Image src="/file-type-css.svg" alt="" width={60} height={60} />
              <Image src="/redux-original.svg" alt="" width={60} height={60} />
              <Image
                src="/file-type-firebase.svg"
                alt=""
                width={60}
                height={60}
              />
            </div>
          }
          projectTitle="LinkedIn clone"
          projectLink={"https://linkedin-clone-ed38b.web.app/"}
          projectLinks={
            <SocialIcon
              className="cursor-pointer"
              url="https://github.com/keenanmalloy/linked-in-clone"
              fgColor="gray"
              bgColor="transparent"
            />
          }
          projectDescription="
          A clone of the LinkedIn web app interface
"
          projectNumber={5}
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
