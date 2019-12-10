import React from "react";
import Link from "next/link";

function Sitemap(props) {
  const { title, link, className } = props;

  return (
    <Link href={link} as={link}>
      <div className={className ? className + " sitemap-link" : "sitemap-link"}>
        <a>{title}</a>
      </div>
    </Link>
  );
}

export default Sitemap;
