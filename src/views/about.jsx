import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
    return (
        <div>
            <a href="/projects">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-up" />
                </div>
            </a>
            <Row>
                <Col xs={12} sm={6} className="m-3">
                    Skills
                </Col>
                <Col xs={12} sm={4} className="m-3 text-center aboutMe">
                    <p>Recently completed a coding bootcamp in full stack web development. Currently a Math Curriculum and Content Developer at <a href="https://mathspace.co/us" target="_blank">Mathspace</a>.
                    </p>
                    <p>
                        Passionate about math and computer science education, web development, and being active.
                    </p>
                </Col>
            </Row>
            <a href="/contact">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-down" />
                </div>
            </a>
        </div>
    )
}

export default About;