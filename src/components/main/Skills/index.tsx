import { Locale } from "../../../../i18n.config";
import Languages from "./Languages";
import Knowledge from "./Knowledge";
import Techs from "./Techs";
import AnimatedDiv from "./AnimatedDiv";

export default async function Skills({ locale }: { locale: Locale }) {
  return (
    <AnimatedDiv>
      <div className="flex flex-col gap-2 text-lg">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Languages locale={locale} />
          <Knowledge locale={locale} />
        </div>
        <Techs locale={locale} />
      </div>
    </AnimatedDiv>
  );
}
