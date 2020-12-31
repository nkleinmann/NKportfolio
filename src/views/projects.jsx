import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projectInfo from "../components/projects/projectInfo";
import Image from "react-bootstrap/image";

function Projects() {
    // console.log(projectInfo)
    return (
        <div>
            <a href="/">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-up" />
                </div>
            </a>
            {projectInfo.map((project) => {
                return (
                    <div key={project.title} className="mb-5 projectBackground text-white">
                    <Row>
                        <Col className="text-center">
                            <h2><strong>{project.title}</strong></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Image className="projectImage" src={project.image} alt={project.title} />
                        </Col>
                        <Col className="text-center">
                           <p className="projectText">{project.description}</p>
                        </Col>
                    </Row>
                    </div>
                )
            })}
            <a href="/about">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-down" />
                </div>
            </a>
        </div>
    )
}

export default Projects;