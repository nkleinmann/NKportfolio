import React from "react";
// import Typical from 'react-typical';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NKprofile from "../assets/images/NBProfile.png";
import Image from "react-bootstrap/Image";
class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h1 className="text-center mt-5 animate__animated animate__slideInDown">Hi, I'm Nicole</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={4} sm={10} className="text-center mt-3">
                        <Image roundedCircle src={NKprofile} width="80%" height="100%" alt="Headshot of Nicole" className="m-2 animate__animated animate__slideInDown" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={4} xs={10} className="mt-3">
                        <p className="text-center aboutText">Software Developer, Runner and Outdoor Enthusiast, New Mom, Teacher</p>
                        {/* Resources: https://www.npmjs.com/package/react-typical, https://www.producthunt.com/posts/react-typical */}
                        {/* <Typical
                            steps={['Full Stack Developer', 2000, 'Runner and Outdoor Enthusiast', 2000, 'Curriculum Engineer and Teacher', 2000]}
                            loop={3}
                            wrapper="p"
                            className="text-center typingText m-4"
                        /> */}
                    </Col>
                </Row>
                <a href="/about">
                    <div className="mt-5 text-center animate__animated animate__bounce animate__repeat-3">
                        <i className="fas fa-chevron-down" />
                    </div>
                </a>
            </div>
        )
    }
}

export default Home;