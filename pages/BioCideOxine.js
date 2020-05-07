import { useEffect } from "react";
import { useRouter } from "next/router";

function BioCideOxine() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/pdfs/Oxine.pdf");
  }, []);

  return <div />;
}

export default BioCideOxine;
