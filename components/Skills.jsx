import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid-cols-4 grid gap-5 ">
        <Skill skillIcon="/reactLogo.svg" />
        <Skill skillIcon="/nextjsLogo.svg" />
        <Skill skillIcon="/tailwindcss.svg" />
        <Skill skillIcon="/typescript-icon.svg" />
        <Skill skillIcon="/postgresql.svg" />
        <Skill skillIcon="/reactqueryLogo.svg" />
        <Skill skillIcon="/nodejsLogo.svg" />
        <Skill skillIcon="/file-type-css.svg" />
        <Skill skillIcon="/file-type-html.svg" />
        <Skill skillIcon="/javascript-js.svg" />
        <Skill skillIcon="/redux-original.svg" />
        <Skill skillIcon="/file-type-firebase.svg" />
        <Skill skillIcon="/file-type-vscode.svg" />
        <Skill skillIcon="/framer-logo.svg" />
        <Skill skillIcon="/sanity.svg" />
        <Skill skillIcon="/git.svg" />
      </div>
    </motion.div>
  );
}
