import { useEffect } from "react";
import { useRouter } from "next/router";

function NuCalgonEvapFresh() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/pdfs/Evap-Fresh.pdf");
  }, []);

  return <div />;
}

export default NuCalgonEvapFresh;
