import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import projectInfo from "../components/projects/projectInfo";
import ListOfProjects from "../components/projects/listOfProjects";



function Projects() {

    return (
        <div className="animate__animated animate__slideInUp mt-5">
            <Row className="justify-content-center">
                <Carousel className="carousel rounded">
                    {projectInfo.map((project) => {
                        return (
                            <Carousel.Item key={project.title} className="text-center">
                                <Card style={{ width: '28rem' }}>
                                    <Card.Img className="projectImage" src={project.image} />
                                    <Row>
                                    <Col>
                                        <Button className="cardButton m-3" href={project.deployedSite} target="_blank">Deployed App</Button>
                                        <Button className="cardButton m-3" href={project.githubRepo} target="_blank">Github Repository</Button>
                                    </Col>
                                </Row>
                                    <Card.Body>
                                        <Card.Title><strong>{project.title}</strong></Card.Title>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Technologies Used:
                                            <br />
                                            {project.techUsed}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Row >

           <ListOfProjects />

            <a href="/about">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-down" />
                </div>
            </a>
        </div >
    )
}

export default Projects;