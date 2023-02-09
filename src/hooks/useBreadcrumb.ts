import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import { TBreadcrumbItem } from "../types/tBreadcrumb";

export const useBreadcrumb = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<TBreadcrumbItem[]>([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbsMap = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbsMap);
  }, [router.asPath]);

  return { breadcrumbs, router };
};
