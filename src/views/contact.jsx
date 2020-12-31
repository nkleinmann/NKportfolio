import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
    return (
        <div className="animate__animated animate__slideInUp text-center mt-5">
            <Row>
                <Col>
                    <h3><strong>Contact Info:</strong></h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="https://github.com/nkleinmann" target="_blank" rel="noreferrer"><i className="fab fa-github fa-4x m-3"></i></a>
                    <a href="https://www.linkedin.com/in/nicolekleinmann/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-4x m-3"></i></a>
                    <a href="#" target="_blank" rel="noreferrer"><i className="far fa-file fa-4x m-3"></i></a>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>
                Please contact me with any questions and/or ideas for collaboration!
                </p>
                </Col>
            </Row>
            <a href="/">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-down" />
                </div>
            </a>
        </div>
    )
}

export default Contact;