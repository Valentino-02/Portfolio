import "./globals.css";
import { Locale } from "../../i18n.config";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata = {
  title: "Valentino Collazo",
  description: "Web Developer Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={locale}>
      <body className=" bg-gradient-to-r from-emerald-800 to-teal-800 dark:from-black-blue dark:to-deep-blue dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="app-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
