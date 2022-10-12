import React from "react";


export default function Skill({ skillIcon }) {
  return (
    <div className="group relative flex cursor-pointer ">
      {
        <img
          alt="skill icon"
          className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          src={skillIcon}
        />
      }
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"></div>
    </div>
  );
}
