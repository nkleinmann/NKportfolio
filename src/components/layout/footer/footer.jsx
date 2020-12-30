import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <Row className="footer justify-content-center">
            <footer className="m-3"><strong>Nicole's Portfolio | &copy; Copyright {new Date().getFullYear()}</strong></footer>
        </Row>
    )
}

export default Footer;