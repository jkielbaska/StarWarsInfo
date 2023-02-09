import { useRouter } from "next/router";

export const GoBack = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className=" pt-2 pb-2 hover:text-dwhite font-galaxyregular text-sm"
    >
      go back
    </button>
  );
};
