import { useEffect } from "react";
import { useRouter } from "next/router";

function WPCovid19() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push(
      "/pdfs/CMI%20-%20COVID%2019%20Pandemic%20Prevention%20Program.pdf"
    );
  }, []);

  return <div />;
}

export default WPCovid19;
