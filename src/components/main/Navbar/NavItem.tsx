import Link from "next/link";
import { Locale } from "../../../../i18n.config";

interface NavItemData {
  label: string;
  page: string;
  currentPage: string;
  locale: Locale;
}

export default function NavItem({
  label,
  page,
  currentPage,
  locale,
}: NavItemData) {
  const shouldRender = page !== currentPage;

  return shouldRender ? (
    <Link
      href={`/${locale}/${page}`}
      className="col-span-2 text-2xl font-normal md:text-3xl sm:col-span-1"
    >
      <span className="transition duration-200 cursor-pointer hover:border-b-2 hover:text-main-yellow border-main-yellow">
        {label}
      </span>
    </Link>
  ) : null;
}
