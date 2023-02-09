import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const router = useRouter();
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoadingStatus(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoadingStatus(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loadingStatus;
};