import Slider from "./Slider";
import ProjectCard, { ProjectInfo } from "./ProjectCard";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/localization";
import AnimatedDiv from "./AnimatedDiv";

export default async function Projects({ locale }: { locale: Locale }) {
  const { projects } = await getDictionary(locale);

  const projectsInfoList: Array<ProjectInfo> = [
    {
      name: "Dispute",
      description: projects.descriptions.dispute,
      techs: ["Next.js", "Tailwind", "Prisma", "MySQL", "Socket.io"],
      imgSrc:
        "https://utfs.io/f/b249e0ed-df59-4a3a-ab5b-878d04891348-fuouos.png",
      liveSrc: "https://dispute.vercel.app",
      gitSrc: "https://github.com/Valentino-02/Dispute",
    },

    {
      name: "Artist Landing Page",
      description: projects.descriptions.landing,
      techs: ["Next.js", "Tailwind", "Framer Motion"],
      imgSrc:
        "https://utfs.io/f/7583c900-99dc-4255-91ab-510eb95fd896-87ymh2.png",
      liveSrc: "https://landing-page-example-pi.vercel.app/",
      gitSrc: "https://github.com/Valentino-02/Landing-Page-Example",
    },
    {
      name: "Photon's Journey",
      description: projects.descriptions.photons,
      techs: ["HTML5", "Godot"],
      imgSrc:
        "https://utfs.io/f/a01f91d0-e06c-41bb-a8d1-b91a276d9c2d-q0umxj.png",
      liveSrc: "https://tinygodzilla.itch.io/photons-journey",
      gitSrc: "https://github.com/best-godot-team-ever/GoGodotJam",
    },
    {
      name: "Portfolio",
      description: projects.descriptions.portfolio,
      techs: ["Next.js", "Tailwind", "Framer Motion"],
      imgSrc:
        "https://utfs.io/f/7178cf0f-5f4f-4373-af02-38aca9aded36-6vd2ay.png",
      liveSrc: "",
      gitSrc: "https://github.com/Valentino-02/Portfolio",
    },
    {
      name: "Dashboard",
      description: projects.descriptions.dashboard,
      techs: ["Next.js", "MaterialUI", "Sass"],
      imgSrc:
        "https://utfs.io/f/6740e82a-a577-44d3-baa4-e4d2a55d42c2-v0yhb2.png",
      liveSrc: "https://dashboard-eight-amber.vercel.app",
      gitSrc: "https://github.com/Valentino-02/Dashboard",
    },
    {
      name: "Civ Manager",
      description: projects.descriptions.civ,
      techs: ["Next.js", "Tailwind", "Firebase"],
      imgSrc:
        "https://utfs.io/f/73f9f92b-b1f9-4fdf-a172-0486aabd3307-l6r63w.png",
      liveSrc: "https://civ-rpg-manager-6jl9.vercel.app/",
      gitSrc: "https://github.com/Valentino-02/civ-rpg-manager",
    },
    {
      name: "Cryptoverse",
      description: projects.descriptions.crypto,
      techs: ["React", "Redux", "AntDesign"],
      imgSrc:
        "https://utfs.io/f/be104c07-b668-43d7-928f-eadb384cb688-qio4j0.png",
      liveSrc:
        "https://62e13f70d5afc520c6139f7c--glittering-jalebi-df258d.netlify.app",
      gitSrc: "https://github.com/Valentino-02/CryptoUpdates",
    },
  ];

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
