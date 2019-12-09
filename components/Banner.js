import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";

const propTypes = {};

const defaultProps = {};

function Banner(props) {
  const { title, img, breadcrumbs } = props;
  const breadcrumbLength = breadcrumbs.length;

  return (
    <Container id="banner" style={{ backgroundImage: "url(" + img + ")" }}>
      <div className="overlay" />
      <div className="content">
        {title ? <h1 className="banner-title">{title}</h1> : null}
        {breadcrumbs ? (
          <div className="banner-subtitle">
            {breadcrumbs.map((breadcrumb, index) => {
              return (
                <React.Fragment key={index}>
                  <Link href={breadcrumb.link} as={breadcrumb.link} key={index}>
                    <a className="breadcrumb">{breadcrumb.title}</a>
                  </Link>
                  {breadcrumbLength === index + 1 ? null : "/"}
                </React.Fragment>
              );
            })}
          </div>
        ) : null}
      </div>
    </Container>
  );
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
