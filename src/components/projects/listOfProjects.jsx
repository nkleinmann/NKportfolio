import React from "react";
import projectInfo from "./projectInfo";
import recentProjectInfo from "./recentProjectInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function ListOfProjects() {
    return (
        <>
            <div>
                <h1 className="text-center pt-5 projectHeader">Recent Projects:</h1>
                <Row>
                    <Col className="text-center">
                    {recentProjectInfo.map((project) => {
                            return (
                                <div className="m-3" key={project.key}>
                                    <Row>
                                        <Col className="m-3">
                                            <h3 className="text-center"> <strong>{project.title}</strong></h3>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col md={6} sm={12}>
                                            <Image className="projImage" src={project.image} alt={project.title} />
                                        </Col>
                                        <Col md={3} sm={12}>
                                            <Row>
                                                <Col>
                                                    <Button className="cardButton m-3" href={project.deployedSite} target="_blank">Deployed App</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button className="cardButton m-3" href={project.githubRepo} target="_blank">Github Repository</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="m-3">{project.description}</p>
                                            <p className="m-3">
                                                Technologies Used:
                                                <br />
                                                {project.techUsed}
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            )
                    })}
                    </Col>
                </Row>
            </div>
            <div className="animate__animated animate__slideInUp">
                <h1 className="text-center pt-5 projectHeader">Bootcamp Projects:</h1>
                <h5 className="text-center pt-5 projectHeader">Note: apps deployed by heroku are no longer deployed (so only source code is relevant)</h5>
                <Row>
                    <Col className="text-center">
                        {projectInfo.map((project) => {
                            return (
                                <div className="mt-5" key={project.key}>
                                    <Row>
                                        <Col className="m-3">
                                            <h3 className="text-center"> <strong>{project.title}</strong></h3>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col md={3} sm={12}>
                                            <Row>
                                                <Col>
                                                    <Button className="cardButton m-3" href={project.deployedSite} target="_blank">Deployed App</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button className="cardButton m-3" href={project.githubRepo} target="_blank">Github Repository</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} sm={12}>
                                            <Image className="projImage" src={project.image} alt={project.title} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="m-3">{project.description}</p>
                                            <p className="m-3">
                                                Technologies Used:
                                                <br />
                                                {project.techUsed}
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default ListOfProjects;