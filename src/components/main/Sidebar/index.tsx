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
      <ProfileImg />
      <Headers locale={locale} />
      <SocialLinks />
      <div className="flex flex-col ">
        <ThemeToggler
          darkLabel={sidebar.darkMode}
          lightLabel={sidebar.lightMode}
        />
        <LanguageToggler locale={locale} />
      </div>
      <Contact />
    </AnimatedDiv>
  );
}
