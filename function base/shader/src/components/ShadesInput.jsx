import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/logo.png";
import Linkedin from "../assets/linkedin.png";
import Git from "../assets/git.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ShadesInput(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <img className="ml-3" src={Logo} alt="logo" height="50px" />
        <Navbar.Brand href="/" className="color-change">
          Color Shader
        </Navbar.Brand>
        <Nav className="mx-auto">
          <input
            type="text"
            className="shade-input"
            value={props.color}
            onChange={(e) => props.onInputChange(e.target.value)}
          />
          <FontAwesomeIcon
            className="search-icon"
            icon={faSearch}
          />
        </Nav>
        <Nav className="ml-auto mr-3">
          <Nav.Item className="mx-2">
            <a href="https://github.com/bhati-mukesh" target="_new">
              <img src={Git} alt="Github Account" height="50" width="50" />
            </a>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <a href="https://www.linkedin.com/in/mukesh1777/" target="_new">
              <img
                src={Linkedin}
                alt="linkedIn Account"
                height="50"
                width="50"
              />
            </a>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default ShadesInput;