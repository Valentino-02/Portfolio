import Languages from "./Languages";
import Knowledge from "./Knowledge";
import Techs from "./Techs";
import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/localization";
import AnimatedDiv from "./AnimatedDiv";

export default async function Skills({ locale }: { locale: Locale }) {
  return (
    <AnimatedDiv>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
          <div className="p-2 rounded-md dark:bg-deep-blue bg-slate-200">
            <Languages locale={locale} />
          </div>
          <div className="col-span-2 p-2 rounded-md dark:bg-deep-blue bg-slate-200">
            <Knowledge locale={locale} />
          </div>
        </div>
        <div className="p-2 rounded-md dark:bg-deep-blue bg-slate-200">
          <Techs locale={locale} />
        </div>
      </div>
    </AnimatedDiv>
  );
}
