"use client";

import { usePathname, useRouter } from "next/navigation";

import { Locale } from "../../../../i18n.config";

export default function LanguageToggler({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = () => {
    let newLocale = locale === "en" ? "es" : "en";
    let newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={() => changeLocale()}
      className="py-1 pr-1 text-lg font-semibold duration-300 bg-white border-4 rounded-b-md dark:bg-black-blue border-main-blue hover:text-main-yellow "
    >
      {locale === "es" ? "Inglés" : "Spanish"}
    </button>
  );
}
