import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BreadcrumbItem } from "../atoms/BreadcrumbItem";
import { useBreadcrumb } from "../../hooks/useBreadcrumb";
import { TBreadcrumbItem } from "../../types/tBreadcrumb";

export const Breadcrumb = () => {
  const { breadcrumbs, router } = useBreadcrumb();

  return (
    <Breadcrumbs className="text-gray" separator="›" aria-label="breadcrumb">
      <BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
        Home
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb: TBreadcrumbItem) => (
          <BreadcrumbItem
            key={breadcrumb.href}
            href={breadcrumb.href}
            isCurrent={breadcrumb.isCurrent}
          >
            {breadcrumb.label ?? "error"}
          </BreadcrumbItem>
        ))}
    </Breadcrumbs>
  );
};
