import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsTable from "../components/skillsTable";

function About() {
  return (
    <div className="mt-5 animate__animated animate__slideInUp">
      <a href="/">
        <div className="mt-5 text-center">
          <i className="fas fa-chevron-up" />
        </div>
      </a>
      <Row className="justify-content-center">
        <Col sm={12} md={8} className="mt-5 text-center aboutMe align-middle">
          <p>
            Passionate about computer science and math education as well as
            being active. 
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={6} className="m-3 text-center">
          <SkillsTable />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="m-3 text-center">
          <p>
            Recently ran the Berin Marathon. Running Chicago this October for the non-profit Bottom Line!
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
