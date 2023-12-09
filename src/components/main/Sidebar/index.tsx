import Image from "next/image";
import { motion } from "framer-motion";

import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/localization";

import SocialLinks from "./SocialLinks";
import Contact from "./Contact";
import ThemeToggler from "./ThemeToggler";
import LanguageToggler from "./LanguageToggler";
import Headers from "./Headers";
import AnimatedDiv from "./AnimatedDiv";

const bowieURL =
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/16C5D/production/_90377239_bowiebygavinevanscopyrightgarethevans.jpg";

export default async function Sidebar({ locale }: { locale: Locale }) {
  const { sidebar } = await getDictionary(locale);
  return (
    <AnimatedDiv>
      <Image
        src={bowieURL}
        alt="Profile Photo"
        className="w-32 h-32 mx-auto rounded-full"
        width={30}
        height={30}
      />
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
