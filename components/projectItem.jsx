import Image from "next/image";
import Link from "next/link";
import React from "react";
import { textChangeRangeIsUnchanged } from "typescript";

const projectItem = ({ title, backgroundImg, projectUrl, tech }) => {
  return (
    <div className="relativ flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {tech}
        </p>
        <Link href={projectUrl}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Mer info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default projectItem;
