import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";
import TechItem from "./TechItem";

export default async function Techs({ locale }: { locale: Locale }) {
  const { skills } = await getDictionary(locale);
  const dictionary = skills.technologies;
  const techsList: Array<string> = [
    "React",
    "Next JS",
    "Tailwind",
    "MaterialUI",
    "i18n",
    "Framer Motion",
    "Firebase",
    "Jest",
    "Alexa Skills",
    "Node",
    "Nest JS",
    "Axios",
    "MongoDB",
    "MySQL",
    "Prisma",
    "Godot",
    "Zustand",
    "Socket.io",
    "Jira",
  ];
  return (
    <div className="flex flex-col items-center gap-4 text-center ">
      <h1 className="text-2xl font-bold text-main-pink">{dictionary.title}</h1>
      <div className="flex flex-row flex-wrap gap-2 text-lg font-bold text-black-blue">
        {techsList.map((label) => (
          <TechItem
            label={label}
            key={label}
            isFramer={label == "Framer Motion" ? true : false}
          />
        ))}
      </div>
    </div>
  );
}
