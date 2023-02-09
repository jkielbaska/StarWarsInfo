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
            {/* {breadcrumb.label!} */}
            {/* {breadcrumb && breadcrumb.label} czemu nie działa?*/}
          </BreadcrumbItem>
        ))}
    </Breadcrumbs>
  );
};

//breadcrumbs to taka nawigacja gdzie sie obecnie znajdujesz,

// import React from "react";
// import Link from "next/link";
// import { Breadcrumbs } from "@mui/material";
// import { Breadcrumb } from "../types/BreadcrumbType";
// import { useRouter } from "next/router";
// // import layout from "../../styles/Layout.module.css";

// const Breadcrumb: React.FC = () => {
//   /**
//    * TODO: dodaj listę breadcrumbów dla aktualnej strony
//    */
//   const items: Breadcrumb[] = [];

//   return (
//     <ul>
//       {" "}
//       {/*className={layout.breadcrumbs}*/}
//       <li>
//         <Link href="/">Strona główna</Link>
//       </li>
//       {items.map(() => {
//         /**
//          * TODO: wyświetl linki do nawigacji po breadcrumbach
//          */
//         return <></>;
//       })}
//     </ul>
//   );
// };

// const _defaultGetTextGenerator = (param: any, query: any) => null;
// const _defaultGetDefaultTextGenerator = (path: any) => path;

// const generatePathParts = (pathStr: any) => {
//   const pathWithoutQuery = pathStr.split("?")[0];
//   return pathWithoutQuery.split("/").filter((v) => v.length > 0);
// };

// export default function NextBreadcrumbs({
//   getTextGenerator = _defaultGetTextGenerator,
//   getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
// }) {
//   // Gives us ability to load the current route details
//   const router = useRouter();

//   const breadcrumbs = useMemo(
//     function generateBreadcrumbs() {
//       const asPathNestedRoutes = generatePathParts(router.asPath);
//       const pathnameNestedRoutes = generatePathParts(router.pathname);

//       const crumblist = asPathNestedRoutes.map((subpath, idx) => {
//         //konwersja z [] do bez
//         const param = pathnameNestedRoutes[idx]
//           .replace("[", "")
//           .replace("]", "");
//         const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
//         return {
//           href,
//           textGenerator: getTextGenerator(param, router.query),
//           text: getDefaultTextGenerator(subpath, href),
//         };
//       });

//       return [{ href: "/", text: "Home" }, ...crumblist];
//     },
//     [
//       router.asPath,
//       router.pathname,
//       router.query,
//       getTextGenerator,
//       getDefaultTextGenerator,
//     ]
//   );

//   // Each individual "crumb" in the breadcrumbs list
//   const Crumb = ({
//     text: defaultText,
//     textGenerator,
//     href,
//     last = false,
//   }: {
//     text: string;
//     textGenerator: any;
//     href: undefined;
//     last: boolean;
//   }) => {
//     const [text, setText] = useState(defaultText);

//     const crumbText = async () => {
//       if (!Boolean(textGenerator)) {
//         return;
//       }
//       // Run the text generator and set the text again
//       const finalText = await textGenerator();
//       setText(finalText);
//     };

//     useEffect(() => {
//       crumbText();
//     }, [textGenerator]);

//     // The last crumb is rendered as normal text since we are already on the page
//     if (last) {
//       return <Typography color="text.primary">{text}</Typography>;
//     }

//     // All other crumbs will be rendered as links that can be visited
//     return (
//       <Link underline="hover" color="inherit" href={href}>
//         {text}
//       </Link>
//     );
//   };

//   return (
//     <Breadcrumbs aria-label="breadcrumb">
//       {breadcrumbs.map((crumb, idx) => (
//         <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
//       ))}
//     </Breadcrumbs>
//   );
// }
