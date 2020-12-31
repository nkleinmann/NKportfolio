import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
    return (
        <div className="mt-5 animate__animated animate__slideInUp">
            <Row>
                <Col sm={12} md={6} className="m-3">
                    <p>Skills:</p>
                    <ul>
                        <li>React</li>
                    </ul>
                </Col>
                <Col sm={12} md={4} className="m-3 text-center aboutMe align-middle">
                    <p>
                        Passionate about web development, math and computer science education, and being active.
                    </p>
                    <p>Recently completed a coding bootcamp in full stack web development. Currently a Math Curriculum and Content Developer at <a href="https://mathspace.co/us" target="_blank" rel="noreferrer">Mathspace</a>.
                    </p>
                </Col>
            </Row>



            <a href="/resume">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-down" />
                </div>
            </a>
        </div>
    )
}

export default About;