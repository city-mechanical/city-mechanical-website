import { useEffect } from "react";
import { useRouter } from "next/router";

function WPCovid19() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/covid-19");
  }, []);

  return <div />;
}

export default WPCovid19;
