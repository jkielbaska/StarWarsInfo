import Head from "next/head";
import { useMemo } from "react";
import { ReactNode } from "react";
import { Header } from "./Header";
import { useRouter } from "next/router";
import { GoBack } from "../atoms/GoBack";
import { PageLoader } from "../atoms/PageLoader";
import { useLoading } from "../../hooks/useLoading";

export default function Layout({ children }: { children: ReactNode }) {
  const loadingStatus = useLoading();
  const router = useRouter();
  const routeName = router.pathname.split("/")[1];
  const title = useMemo(
    () => `${routeName.charAt(0).toUpperCase() + routeName.slice(1)} 
  StarWarsInfo`,
    [routeName]
  );
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Check data about StarWars" />
        <meta name="og:title" content="StarWars info" />
        <link rel="icon" href="/starwarsinfo-icon.png" />
      </Head>

      <div className="  h-screen flex flex-col text-yellow">
        <Header />
        {/* {loadingStatus === true ? (
          <div className="div-wrapCenter">
            <PageLoader open={loadingStatus}></PageLoader>
          </div>
        ) : ( */}
        <main className=" h-screen flex flex-col">{children}</main>
        {/* )} */}
      </div>
    </>
  );
}
