import { Montserrat } from "next/font/google";

import "./globals.css";
import { Locale } from "../../i18n.config";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata = {
  title: "Valentino Collazo",
  description: "Web Developer Portfolio",
};

const font = Montserrat({ subsets: ["latin"], display: "swap" });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={locale} className={font.className}>
      <body className="text-gray-900 bg-gray-300 dark:bg-stone-950 dark:text-gray-200">
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
