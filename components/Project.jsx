import React from "react";
import { motion } from "framer-motion";

export default function Project({
  techImage,
  projectDescription,
  projectImage,
  projectTitle,
  projectNumber,
  projectLinks,
  projectLink,
}) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
     <a href={projectLink}>
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={projectImage}
        height={200}
        width={200}
      />
      </a>
      <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Project {projectNumber} of 5:{" "}
          </span>
          {projectTitle}
        </h4>
        <div className="flex justify-center -py">{projectLinks}</div>

        {techImage}
        <p className="text-lg text-center md:text-left">{projectDescription}</p>
      </div>
    </div>
  );
}
