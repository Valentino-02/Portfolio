import Slider from "./Slider";
import ProjectCard, { ProjectInfo } from "./ProjectCard";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/localization";
import AnimatedDiv from "./AnimatedDiv";

const bowieURL =
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/16C5D/production/_90377239_bowiebygavinevanscopyrightgarethevans.jpg";

const projectsInfoList: Array<ProjectInfo> = [
  {
    name: "Name",
    description: "Test Test Test Test",
    techs: ["tech", "tech2", "tech3"],
    imgSrc: bowieURL,
    liveSrc: "",
    gitSrc: "",
  },
  {
    name: "Name",
    description: "Test Test Test Test",
    techs: ["tech", "tech2", "tech3"],
    imgSrc: bowieURL,
    liveSrc: "",
    gitSrc: "",
  },
  {
    name: "Name",
    description: "Test Test Test Test",
    techs: ["tech", "tech2", "tech3"],
    imgSrc: bowieURL,
    liveSrc: "",
    gitSrc: "",
  },
];

export default async function Projects({ locale }: { locale: Locale }) {
  const { projects } = await getDictionary(locale);

  const projectCards = projectsInfoList.map((info, index) => (
    <ProjectCard key={index} projectInfo={info} />
  ));

  return (
    <AnimatedDiv>
      <div className="flex flex-col">
        <Slider slides={projectCards} />
        <h1 className="mt-10 font-semibold text-center ">
          {projects.more}
          <a className="duration-300 cursor-pointer hover:text-main-yellow">
            Github
          </a>
        </h1>
      </div>
    </AnimatedDiv>
  );
}
