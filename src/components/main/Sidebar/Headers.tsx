import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/localization";

const CVlink = "";

export default async function Headers({ locale }: { locale: Locale }) {
  const { sidebar } = await getDictionary(locale);

  return (
    <>
      <div className="items-center justify-center mx-4 my-4">
        <h3 className="text-3xl font-bold text-main-pink ">Valentino</h3>
        <h3 className="text-3xl font-bold ">Collazo</h3>
      </div>
      <div>
        <p className="px-2 py-1 mx-2 my-3 text-lg font-semibold rounded-full bg-slate-300 dark:bg-black-blue ">
          {sidebar.title}
        </p>
        <a
          href={CVlink}
          download="CV"
          className="flex justify-center px-2 py-1 mx-2 my-2 text-lg font-semibold transition duration-300 rounded-full cursor-pointer bg-slate-300 hover:text-main-yellow dark:bg-black-blue "
        >
          {sidebar.cv}
        </a>
      </div>
    </>
  );
}
