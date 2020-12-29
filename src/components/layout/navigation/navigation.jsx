import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";


function Navigation() {
    return (
        <Nav className="justify-content-center">
            <Row>
                {/* <Col sm={12} lg={3}>
                    <Nav.Item>
                        <Nav.Link href="/">Nicole Kleinmann</Nav.Link>
                    </Nav.Item>
                </Col> */}
                <Col sm={12} lg={4}>
                    <Nav.Item>
                        <Nav.Link>Projects</Nav.Link>
                    </Nav.Item>
                </Col>
                <Col sm={12} lg={4}>
                    <Nav.Item>
                        <Nav.Link>About</Nav.Link>
                    </Nav.Item>
                </Col>
                <Col sm={12} lg={4}>
                    <Nav.Item>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav.Item>
                </Col>

            </Row>
        </Nav>
    )
}

export default Navigation;