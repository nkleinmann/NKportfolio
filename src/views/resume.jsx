import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
    return (
        <div className="animate__animated animate__slideInUp">
            <Row>
                <Col>
                    <p>resume</p>
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

export default Resume;