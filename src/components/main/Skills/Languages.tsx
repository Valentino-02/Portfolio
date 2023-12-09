import { getDictionary } from "@/localization";
import { Locale } from "../../../../i18n.config";
import LanguageItem from "./LanguageItem";

export default async function Languages({ locale }: { locale: Locale }) {
  const { skills } = await getDictionary(locale);
  const dictionary = skills.language;
  const languagesList: Array<string> = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Go",
    "CSS",
    "HTML",
    "SQL",
    "GdScript",
  ];
  return (
    <div className="flex flex-col items-center gap-4 text-center ">
      <h1 className="text-2xl font-bold text-main-pink">{dictionary.title}</h1>
      <h3 className="text-lg font-semibold">{dictionary.commonLanguages}</h3>
      <div className="grid grid-cols-2 gap-1 font-semibold">
        {languagesList.map((label, index) => (
          <LanguageItem label={label} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
