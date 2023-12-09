import { getDictionary } from "@/localization";
import React from "react";
import { Locale } from "../../../../i18n.config";
import Introduction from "./Introduction";
import InfoCard from "./InfoCard";
import AnimatedDiv from "./AnimatedDiv";

export default async function About({ locale }: { locale: Locale }) {
  const { about } = await getDictionary(locale);
  return (
    <AnimatedDiv>
      <Introduction dictionary={about} />
      <div className="flex flex-col items-center gap-4 mt-8 md:justify-center md:flex-row md:items-start">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </AnimatedDiv>
  );
}
