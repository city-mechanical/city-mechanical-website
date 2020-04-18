import React from "react";
import Container from "react-bootstrap/Container";
import Banner from "../components/Banner";
import Form from "../components/Form";
import AlertMessages from "../components/AlertMessages";
import { NextSeo } from "next-seo";

function RequestService() {
  const pages = require("../data/data.json").data.pages;
  const requestService = pages["request-service"];

  return (
    <div id="request-service">
      <NextSeo
        title={requestService.metaTitle}
        description={requestService.metaDesc}
      />
      <Banner
        img={requestService.banner}
        title={requestService.title}
        breadcrumbs={[
          { title: pages["home"].title, link: pages["home"].link },
          { title: requestService.title, link: requestService.link },
        ]}
      />
      <AlertMessages />
      <Container>
        <Form
          title="Thank You For Visiting City Mechanical"
          desc="We hope that you like what we, City Mechanical, are all about! To the right is the form to request service from us. So, if you would like an estimate for one of our services, please fill out this form. Likewise, to schedule an appointment, this form is for you. Otherwise, if you would like to ask us any general questions, be sure to head over to the Contact page. Likewise, if you have any comments related to the website or our services, you should head over to the Contact page. Thank you for considering City Mechanical for your HVAC needs. We hope to serve you in the future!"
          formURL="https://form.jotform.com/200535368319153"
        />
      </Container>
    </div>
  );
}

export default RequestService;
