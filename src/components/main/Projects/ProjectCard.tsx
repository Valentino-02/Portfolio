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
    <div className="flex flex-row items-center border-2 border-black rounded-sm bg-zinc-200 dark:bg-zinc-950">
      <div className=" h-80 p-3 grid grid-rows-6 gap-3 border-black sm:w-[275px]  ">
        <h1 className="row-span-1 text-4xl font-bold text-main-pink ">
          {projectInfo.name}{" "}
        </h1>
        <div className="row-span-1 text-lg font-semibold ">
          <a
            href={projectInfo.liveSrc}
            className="px-1 font-bold text-black duration-300 border-4 rounded-l-sm cursor-pointer hover:text-white bg-main-blue border-main-blue"
          >
            Demo
          </a>
          <a
            href={projectInfo.gitSrc}
            className="px-1 duration-300 border-4 rounded-r-sm cursor-pointer hover:text-main-yellow border-main-blue"
          >
            Git
          </a>
        </div>
        <p className="row-span-3 font-semibold text-md ">
          {projectInfo.description}
        </p>
        <div className="flex flex-row flex-wrap self-end row-span-1 gap-2 font-semibold justify-self-end ">
          {projectInfo.techs.map((label) => (
            <h6
              key={label}
              className="px-2 rounded-lg bg-zinc-400 dark:bg-zinc-900"
            >
              {label}
            </h6>
          ))}
        </div>
      </div>

      <Image
        src={projectInfo.imgSrc}
        alt={projectInfo.name}
        width={300}
        height={300}
        className="w-[275px] h-[275px] rounded-sm hidden md:flex mx-3 border-4 border-black"
      />
    </div>
  );
}
