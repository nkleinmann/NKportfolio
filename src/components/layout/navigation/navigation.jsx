import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function Navigation() {
    return (
        <Nav justify variant="pills" className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/">Nicole Kleinmann</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects">Current Projects</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item> */}
            <NavDropdown title="Info" id="nav-dropdown">
                <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
                <NavDropdown.Item href="#">Resume</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contact">Contact Info</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default Navigation;