"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Locale } from "../../../../i18n.config";
import NavItem from "./NavItem";

export default function Navbar({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: any;
}) {
  const pathname = usePathname();
  const [page, setPage] = useState("");

  const navItemsData = [
    {
      label: dictionary.projects,
      page: "projects",
    },
    {
      label: dictionary.skills,
      page: "skills",
    },
    {
      label: dictionary.about,
      page: "",
    },
  ];
  const currentLabel = navItemsData.find((data) => data.page === page)?.label;

  useEffect(() => {
    if (pathname.includes("/projects")) setPage("projects");
    else if (pathname.includes("/skills")) setPage("skills");
    else setPage("");
  }, [pathname]);

  return (
    <motion.div
      initial={{ x: 800 }}
      animate={{ x: 0 }}
      transition={{
        delay: 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="grid grid-cols-4 gap-4 px-5 py-3 my-3"
    >
      <div className="col-span-4 sm:col-span-2">
        <span className="text-2xl font-bold border-b-4 border-main-yellow md:text-3xl ">
          {currentLabel}
        </span>
      </div>

      {navItemsData.map((data) => (
        <NavItem
          key={data.label}
          label={data.label}
          page={data.page}
          currentPage={page}
          locale={locale}
        />
      ))}
    </motion.div>
  );
}
