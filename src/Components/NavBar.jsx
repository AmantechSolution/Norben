import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="img-fluid logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                About Us
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="service"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Services
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="work"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                work Process
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
