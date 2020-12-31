import React from "react";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import projectInfo from "../components/projects/projectInfo";
import Image from "react-bootstrap/image";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';



function Projects() {
    // console.log(projectInfo)
    // const userSelect = useRef(null);

    return (
        <div>
            <Row className="justify-content-center">
                <Carousel className="carousel rounded">
                    {projectInfo.map((project) => {
                        return (
                            // For list of projects
                            // <div key={project.title} className="mb-5 projectBackground text-white">
                            // <Row>
                            //     <Col className="text-center">
                            //         <h2><strong>{project.title}</strong></h2>
                            //     </Col>
                            // </Row>
                            // <Row>
                            //     <Col className="text-center">
                            // <Image className="projectImage" src={project.image} alt={project.title} />
                            //     </Col>
                            //     <Col className="text-center">
                            //        <p className="projectText">{project.description}</p>
                            //     </Col>
                            // </Row>
                            // </div>
                            // ref={createRef()}
                            <Carousel.Item key={project.title} className="text-center">
                                <Image className="projectImage" src={project.image} alt={project.title} />
                                <Card className="mt-3">
                                    <Card.Body>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p>
                                        Technology Used:
                                       <br />
                                        {project.techUsed}
                                    </p>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
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