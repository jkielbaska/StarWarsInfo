import Link from "next/link";
import Image from "next/image";
import { getUrlId } from "../../utils/getUrlId";

export const OurImage = ({
  url,
  name,
  type,
}: {
  url: string | undefined;
  name: string | number | undefined;
  type: "films" | "characters";
}) => {
  const id = getUrlId(url!);
  return (
    <div className="flex justify-center">
      <Image
        alt={`photo of ${name}`}
        width={200}
        height={250}
        src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
      />
    </div>
  );
};
