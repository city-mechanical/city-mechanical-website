import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";

const propTypes = {};

const defaultProps = {};

function Banner(props) {
  const { title, img, breadcrumbs, size } = props;
  const breadcrumbLength = breadcrumbs ? breadcrumbs.length : 0;

  return (
    <Container
      id="banner"
      className={size ? "size-" + size : "size-lg"}
      style={{ backgroundImage: "url(" + img + ")" }}
    >
      <div className="overlay" />
      <div className="content">
        {title ? <h1 className="banner-title">{title}</h1> : null}
        {breadcrumbs ? (
          <div className="banner-subtitle">
            {breadcrumbs.map((breadcrumb, index) => {
              return (
                <React.Fragment key={index}>
                  <Link
                    href={breadcrumb.href ? breadcrumb.href : breadcrumb.link}
                    as={breadcrumb.as ? breadcrumb.as : breadcrumb.link}
                    key={index}
                  >
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
