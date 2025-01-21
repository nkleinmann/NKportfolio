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
            Recently ran the Sydney, Australia marathon and loved it! Life long goal is to run all the world major marathons. 4 down and 2 more to go (well now 3 because there are recently 7 world majors instead of 6).
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
