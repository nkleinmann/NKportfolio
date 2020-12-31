import React from "react";
import Row from "react-bootstrap/Row";
import projectInfo from "../components/projects/projectInfo";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';



function Projects() {
    // console.log(projectInfo)
    // const userSelect = createRef();

    return (
        <div className="animate__animated animate__slideInUp">
            <Row className="justify-content-center">
                <Carousel className="carousel rounded">
                    {projectInfo.map((project) => {
                        return (      
                            <Carousel.Item key={project.title} className="text-center">
                                <Card style={{ width: '28rem' }}>
                                    <Card.Img className="projectImage" src={project.image} />
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
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
            <a href="/about">
                <div className="mt-5 text-center">
                    <i className="fas fa-chevron-down" />
                </div>
            </a>
        </div >
    )
}

export default Projects;