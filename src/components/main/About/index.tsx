import { getDictionary } from "@/localization";
import React from "react";
import { Locale } from "../../../../i18n.config";
import Introduction from "./Introduction";
import InfoCard from "./InfoCard";
import AnimatedDiv from "./AnimatedDiv";
import AnimatedInfoCards from "./AnimatedInfoCards";

export default async function About({ locale }: { locale: Locale }) {
  const { about } = await getDictionary(locale);
  return (
    <AnimatedDiv>
      <Introduction dictionary={about} />
      <AnimatedInfoCards>
        <div className="grid content-start grid-cols-1 gap-4 mt-8 md:justify-center md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <InfoCard
              title={about.infoCards[1].title}
              text={about.infoCards[1].text}
            />
            <InfoCard
              title={about.infoCards[2].title}
              text={about.infoCards[2].text}
            />
          </div>
          <div className="flex flex-col gap-4">
            <InfoCard
              title={about.infoCards[3].title}
              text={about.infoCards[3].text}
            />
            <InfoCard
              title={about.infoCards[4].title}
              text={about.infoCards[4].text}
            />
          </div>
        </div>
      </AnimatedInfoCards>
    </AnimatedDiv>
  );
}
