import { Locale } from "../../../../i18n.config";
import About from "@/components/main/About";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <About locale={locale} />;
}
