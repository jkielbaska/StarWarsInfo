import { useRouter } from "next/router";
import Link from "next/link";
import { Typography } from "@mui/material";
import { useMemo, useState, useEffect } from "react";
const _defaultGetTextGenerator = (param: any, query: any) => null;
const _defaultGetDefaultTextGenerator = (path: string) =>
  path.charAt(0).toUpperCase() + path.slice(1);

const generatePathParts = (pathStr: any) => {
  const pathWithoutQuery = pathStr.split("?")[0];
  return pathWithoutQuery.split("/").filter((v: string) => v.length > 0);
};

export default function NextBreadcrumbs({
  getTextGenerator = _defaultGetTextGenerator,
  getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
  separator = ">",
}: {
  separator?: string | React.ReactNode;
  getDefaultTextGenerator?: (path: string) => string;
  getTextGenerator?: (param: any, query: any) => null;
}) {
  const router = useRouter();

  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const asPathNestedRoutes = generatePathParts(router.asPath);
      const pathnameNestedRoutes = generatePathParts(router.pathname);

      const crumblist = asPathNestedRoutes.map(
        (subpath: string, idx: number) => {
          const param = pathnameNestedRoutes[idx]
            .replace("[", "")
            .replace("]", "");
          const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
          return {
            href,
            textGenerator: getTextGenerator(param, router.query),
            text: getDefaultTextGenerator(subpath),
          };
        }
      );

      return [{ href: "/", text: "Home" }, ...crumblist];
    },
    [
      router.asPath,
      router.pathname,
      router.query,
      getTextGenerator,
      getDefaultTextGenerator,
    ]
  );

  return (
    <div aria-label="breadcrumb" className="flex gap-3">
      {breadcrumbs.map((crumb, idx, arr) => (
        <>
          <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
          {idx === arr.length - 1 ? null : separator}
        </>
      ))}
    </div>
  );
}

const Crumb = ({
  text: defaultText,
  textGenerator,
  href,
  last = false,
}: {
  text: string;
  textGenerator: any;
  href: string;
  last: boolean;
}) => {
  const [text, setText] = useState(defaultText);

  const crumbText = async () => {
    if (!Boolean(textGenerator)) {
      return;
    }
    const finalText = await textGenerator();
    setText(finalText);
  };

  useEffect(() => {
    crumbText();
  }, [textGenerator]);

  if (last) {
    return <Typography>{text}</Typography>;
  }

  return (
    <Typography>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </Typography>
  );
};
