import Link from "next/link";
import { Breadcrumb } from "../Breadcrumbs";
import { useRouter } from "next/router";
import { GoBack } from "../../atoms/GoBack";

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <header className="flex flex-col text-title font-galaxyoutline pl-2  ">
          <Link href="/">
            <a className=" sm:hover:text-red ">StarWarsInfo</a>
          </Link>
          <Breadcrumb />
          <div role="goBackButton" className="flex ">
            {router.pathname !== "/" && <GoBack />}
          </div>
        </header>
      </div>
    </>
  );
};
