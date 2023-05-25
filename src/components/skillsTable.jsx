import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SkillsTable() {
    return (
        <div className="skills rounded">
            <Row>
                <Col sm={12} className="m-3 text-center">
                    <h3>Skills &amp; Technologies:</h3>
                </Col>
            </Row>
            <Row>
                <Col >
                    Languages <i className="fa fa-code fa-1x"></i>
                    <br />
                    <p className="mt-3">HTML, CSS, JavaScript, Python, JSX</p>
                    
                </Col>
                <Col>
                    Tools <i className="fa fa-terminal fa-1x"></i>
                    <br />
                    <p className="mt-3">MongoDB, MySQL, PostgreSQL, Git, Github, AWS</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    Frameworks <i className="fas fa-code-branch"></i>
                    <br />
                    <p className="mt-3">React, Express, Bootstrap, Materialize</p>
                </Col>
                <Col>
                    Other Skills <i className="far fa-handshake"></i>
                    <br />
                    <p className="mt-3">Teamwork, Problem Solving, Communication, Creative Thinking</p>
                </Col>
            </Row>
        </div>
    )
}

export default SkillsTable;