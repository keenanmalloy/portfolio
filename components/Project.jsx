import React from "react";

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
        <img
          src={projectImage}
          className="max-h-40   shadow-xl rounded-3xl border-2 border-gray-300"
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
        <p className="text-lg text-center ">{projectDescription}</p>
      </div>
    </div>
  );
}
