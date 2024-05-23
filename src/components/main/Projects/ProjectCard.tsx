"use client";

import Image from "next/image";

export interface ProjectInfo {
  name: string;
  description: string;
  techs: Array<string>;
  imgSrc: string;
  liveSrc: string;
  gitSrc: string;
}

export default function ProjectCard({
  projectInfo,
}: {
  projectInfo: ProjectInfo;
}) {
  return (
    <div className="flex flex-row items-start w-11/12 gap-4 bg-stone-300 dark:bg-slate-950">
      <div className="flex flex-col justify-between gap-6 ">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <h1 className="text-4xl font-bold text-main-pink ">
            {projectInfo.name}
          </h1>
          <div className="flex self-start gap-1 text-xl font-black tracking-widest ">
            <a
              target="_blank"
              href={projectInfo.liveSrc}
              className="p-2 text-black duration-300 border-4 rounded-l-xl hover:text-white bg-main-blue border-main-blue"
            >
              Demo
            </a>
            <a
              target="_blank"
              href={projectInfo.gitSrc}
              className="p-2 duration-300 border-4 rounded-r-xl hover:text-main-yellow border-main-blue"
            >
              Git
            </a>
          </div>
        </div>

        <p className="font-semibold text-justify text-md ">
          {projectInfo.description}
        </p>
        <div className="flex flex-row flex-wrap gap-2 font-semibold">
          {projectInfo.techs.map((label) => (
            <h6
              key={label}
              className="px-2 rounded-lg bg-zinc-400 dark:bg-gray-900"
            >
              {label}
            </h6>
          ))}
        </div>
      </div>

      <Image
        src={projectInfo.imgSrc}
        alt={projectInfo.name}
        width={1000}
        height={1000}
        className="hidden mx-3 border-4 border-black rounded-sm w-60 h-60 xl:w-80 xl:h-80 lg:flex"
      />
    </div>
  );
}
