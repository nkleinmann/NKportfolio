import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projectInfo from "../components/projects/projectInfo";
import Image from "react-bootstrap/image";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';



function Projects() {
    // console.log(projectInfo)
    return (
        <div>
            {/* <a href="/">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-up" />
                </div>
            </a> */}
            <Row className="justify-content-center">
            <Carousel className="carousel">
            {projectInfo.map((project) => {
                return (
                    // <div key={project.title} className="mb-5 projectBackground text-white">
                    // <Row>
                    //     <Col className="text-center">
                    //         <h2><strong>{project.title}</strong></h2>
                    //     </Col>
                    // </Row>
                    // <Row>
                    //     <Col className="text-center">
                    //         <Image className="projectImage" src={project.image} alt={project.title} />
                    //     </Col>
                    //     <Col className="text-center">
                    //        <p className="projectText">{project.description}</p>
                    //     </Col>
                    // </Row>
                    // </div>
                       <Carousel.Item key={project.title} className="text-center">
                           <Card style={{ width: '18rem' }}>
                               <Card.Img variant="top" src={project.image} />
                               <Card.Body>
                                   <Card.Title>{project.title}</Card.Title>
                                   <Card.Text>
                                       {project.description}
                                   </Card.Text>
                                   <Card.Link href={project.deployedSite} target="_blank">
                                       Deployed Site
                                   </Card.Link>
                                   <Card.Link href={project.githubRepo} target="_blank">
                                       Github Repository
                                   </Card.Link>
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