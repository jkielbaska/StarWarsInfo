import Link from "next/link";
import { TBreadcrumbItem } from "../../types/tBreadcrumb";

export const BreadcrumbItem = ({
  children,
  href,
  isCurrent,
}: TBreadcrumbItem) => {
  return (
    <Link href={href} passHref aria-current={isCurrent ? "page" : "false"}>
      <a className="hover:text-dgray font-galaxyregular">{children}</a>
    </Link>
  );
};
