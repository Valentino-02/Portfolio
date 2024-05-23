import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/localization";

const CVlink = "https://cv-beta-sepia.vercel.app";

export default async function Headers({ locale }: { locale: Locale }) {
  const { sidebar } = await getDictionary(locale);

  return (
    <div className="py-2">
      <h3 className="text-3xl font-bold text-main-pink ">Valentino</h3>
      <h3 className="text-3xl font-bold ">Collazo</h3>

      <p className="mt-1 text-lg font-semibold text-right text-gray-700 dark:text-gray-300">
        {sidebar.title}
      </p>
    </div>
  );
}
