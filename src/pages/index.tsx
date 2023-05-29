import { NextPageWithLayout } from "../types/tNextPageLayout";
import Link from "next/link";
import { StormTrooper } from "../components/molecules/StormTrooper";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <StormTrooper />

      <div className="flex justify-center h-40v items-center flex-col sm:flex-row sm:justify-evenly ">
        <Link href="/films">
          <a className="font-galaxyoutline sm:text-subtitle  text-3xl hover:text-red">
            Films
          </a>
        </Link>

        <Link href="/characters">
          <a className="font-galaxyoutline sm:text-subtitle text-3xl p-5  sm:p-0  hover:text-red">
            Characters
          </a>
        </Link>
      </div>
    </>
  );
};

export default Home;
