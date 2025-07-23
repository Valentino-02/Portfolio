import Projects from "@/components/main/Projects";
import { Locale } from "../../../../../i18n.config";

export default async function ProjectsPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <Projects locale={locale} />;
}
