import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          My Profile
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-semibold">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-semibold">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="fw-semibold">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
