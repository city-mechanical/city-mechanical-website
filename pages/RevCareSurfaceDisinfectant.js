import { useEffect } from "react";
import { useRouter } from "next/router";

function RevCareSurfaceDisinfectant() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/pdfs/Rev Care Surface Disinfectant.pdf");
  }, []);

  return <div />;
}

export default RevCareSurfaceDisinfectant;
