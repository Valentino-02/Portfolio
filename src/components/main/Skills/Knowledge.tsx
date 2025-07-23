import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";
import KnowledgeItem from "./KnowledgeItem";

export default async function Knowledge({ locale }: { locale: Locale }) {
  const { skills } = await getDictionary(locale);
  const dictionary = skills.knowledge;
  const knowledgeList: Array<string> = [
    dictionary.frontendDev,
    dictionary.backendDev,
    dictionary.gameDev,
    dictionary.responsiveDesign,
    dictionary.agileDev,
    dictionary.testDrivenDev,
    dictionary.designPrinciples,
    dictionary.versionControl,
    dictionary.programmingParadigms,
  ];

  return (
    <div className="flex flex-col items-center justify-between col-span-2 gap-4 text-center">
      <h1 className="text-2xl font-bold text-main-pink">{dictionary.title}</h1>
      <div className="grid grid-cols-2 gap-1 font-semibold sm:grid-cols-3 text-l">
        {knowledgeList.map((label, index) => (
          <KnowledgeItem key={index} label={label} index={index} />
        ))}
      </div>
    </div>
  );
}
