import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/localization";

import SocialLinks from "./SocialLinks";
import Contact from "./Contact";
import ThemeToggler from "./ThemeToggler";
import LanguageToggler from "./LanguageToggler";
import Headers from "./Headers";
import AnimatedDiv from "./AnimatedDiv";
import ProfileImg from "./ProfileImg";

export default async function Sidebar({ locale }: { locale: Locale }) {
  const { sidebar } = await getDictionary(locale);
  return (
    <AnimatedDiv>
      <div className="flex flex-col px-4 py-4 2xl:px-8">
        <div className="flex flex-col divide-y dark:divide-gray-200 divide-gray-950">
          <ProfileImg />
          <Headers locale={locale} />
          <SocialLinks />
          <Contact />
        </div>

        <div className="flex flex-col ">
          <ThemeToggler
            darkLabel={sidebar.darkMode}
            lightLabel={sidebar.lightMode}
          />
          <LanguageToggler locale={locale} />
        </div>
      </div>
    </AnimatedDiv>
  );
}
