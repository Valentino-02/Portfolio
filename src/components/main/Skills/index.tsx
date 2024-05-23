import { Locale } from "../../../../i18n.config";
import Languages from "./Languages";
import Knowledge from "./Knowledge";
import Techs from "./Techs";
import AnimatedDiv from "./AnimatedDiv";

export default async function Skills({ locale }: { locale: Locale }) {
  return (
    <AnimatedDiv>
      <div className="flex flex-col gap-2 text-lg">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
          <div className="p-2 ">
            <Languages locale={locale} />
          </div>
          <div className="col-span-2 p-2 ">
            <Knowledge locale={locale} />
          </div>
        </div>
        <div className="p-2 ">
          <Techs locale={locale} />
        </div>
      </div>
    </AnimatedDiv>
  );
}
