import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function Navigation() {
    return (
        <Nav variant="light" className="justify-content-center nav">
            <Nav.Item>
                <Nav.Link className="navLink" href="/">Nicole Kleinmann</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navLink" href="/projects">Current Projects</Nav.Link>
            </Nav.Item>
            <NavDropdown title={<span className="navLink">Info</span>} id="nav-dropdown">
                <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
                <NavDropdown.Item href="#">Resume</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contact">Contact Info</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default Navigation;