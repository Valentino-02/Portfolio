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
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
      <div className="h-full col-span-12 px-4 pt-4 text-base text-center shadow-2xl bg-neutral-50 dark:bg-dark-blue lg:col-span-3 rounded-2xl ">
        <Sidebar locale={locale} />
      </div>

      <div className="flex flex-col col-span-12 overflow-hidden shadow-2xl bg-neutral-50 rounded-2xl lg:col-span-9 dark:bg-dark-blue">
        <Navbar locale={locale} dictionary={navbar} />
        <div className="px-6 py-2 ">{children}</div>
      </div>
    </div>
  );
}
