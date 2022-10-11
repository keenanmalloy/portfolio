import React from "react";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <div className="group relative flex cursor-pointer">
      {
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          src="/profilepic.jpg"
        />
      }
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"></div>
    </div>
  );
}
