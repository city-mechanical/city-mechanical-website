import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../../components/Banner";
import ContactLink from "../../components/ContactLink";
import Employee from "../../components/Employee";
import { NextSeo } from "next-seo";

function StaffDirectory() {
  const pages = require("../../data/data.json").data.pages;
  const staffDirectoryPage = pages["contact"].children["staff-directory"];
  const directory = staffDirectoryPage.directory;

  return (
    <div id="staff-directory">
      <NextSeo
        title={staffDirectoryPage.metaTitle}
        description={staffDirectoryPage.metaDesc}
      />
      <Banner
        img={staffDirectoryPage.banner}
        title={staffDirectoryPage.title}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          { title: pages["contact"].title, link: pages["contact"].link },
          {
            title: staffDirectoryPage.title,
            link: pages["contact"].link + staffDirectoryPage.link,
          },
        ]}
      />

      {Object.entries(directory).map(([index, team]) => {
        return (
          <Container className="staff-team" key={index}>
            <div className="team-header">
              <h2 className="team-title">{team.title}</h2>
              {team.teamEmail ? <ContactLink data={team.teamEmail} /> : null}
            </div>
            <Row>
              {Object.entries(team.members).map(([index, member]) => {
                return (
                  <Col sm={12} md={6} lg={6} xl={4} key={index}>
                    <Employee
                      img={member.img}
                      name={member.name}
                      title={member.title}
                      email={member.email}
                      work={member.work}
                      cell={member.cell}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        );
      })}
    </div>
  );
}

export default StaffDirectory;
