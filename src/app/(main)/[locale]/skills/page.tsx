import Skills from "@/components/main/Skills";
import { Locale } from "../../../../../i18n.config";

export default async function SkillsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <Skills locale={locale} />;
}
