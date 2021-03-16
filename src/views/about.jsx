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
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={6} className="m-3 text-center">
                    <SkillsTable />
                </Col>
                <Col sm={12} md={4} className="mt-5 text-center aboutMe align-middle">
                    <p>
                        Passionate about math and computer science education, web development, and being active.
                    </p>
                    <p>Recently completed a coding bootcamp in full stack web development. Currently a Math Curriculum and Content Developer.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default About;