import React from "react";
import Typical from 'react-typical';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import NKphoto from "../images/NKphoto.jpg";
import NKprofile2 from "../images/NKprofile2.png";
import Image from "react-bootstrap/Image";
class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h1 className="text-center mt-5 animate__animated animate__backInLeft">Hi, I'm Nicole</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <Image roundedCircle src={NKprofile2} alt="Headshot of Nicole" className="animate__animated animate__rollIn" />
                    </Col>
                </Row>
                <Row>
                    {/* <Col sm={4} className="ml-3 text-center">
                        <Image roundedCircle src={NKprofile2} alt="Headshot of Nicole" className="animate__animated animate__rollIn" />
                    </Col> */}
                    <Col className="mt-3">

                        {/* Resources: https://www.npmjs.com/package/react-typical, https://www.producthunt.com/posts/react-typical */}
                        <Typical
                            steps={['Full Stack Developer', 2000, 'Math Content and Curriculum Developer', 2000, 'Runner and Outdoor Enthusiast', 2000]}
                            loop={Infinity}
                            wrapper="p"
                            className="text-center"
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;