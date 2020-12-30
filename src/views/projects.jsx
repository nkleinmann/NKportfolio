import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
    return (
        <div>
            <a href="/">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-up" />
                </div>
            </a>
            <Row>
                <Col>
                    <p>Projects</p>
                </Col>
            </Row>
            <a href="/about">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-down" />
                </div>
            </a>
        </div>
    )
}

export default Projects;