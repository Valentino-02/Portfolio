import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/localization";

import Navbar from "@/components/main/Navbar";
import Sidebar from "@/components/main/Sidebar";

export default async function MainLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { navbar } = await getDictionary(locale);

  return (
    <div className="grid grid-cols-12 gap-6 mx-3 mt-4 mb-28 sm:mx-8 md:mx-32 lg:mx-20 xl:mx-20 ">
      <div className="col-span-12 bg-gray-200 rounded-md shadow-2xl dark:bg-slate-900 lg:col-span-3 ">
        <Sidebar locale={locale} />
      </div>

      <div className="col-span-12 bg-gray-200 rounded-md shadow-2xl lg:col-span-9 dark:bg-slate-900">
        <Navbar locale={locale} dictionary={navbar} />
        <div className="px-6 py-2 ">{children}</div>
      </div>
    </div>
  );
}
