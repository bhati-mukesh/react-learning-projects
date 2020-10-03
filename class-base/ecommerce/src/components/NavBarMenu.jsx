import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav,  } from 'react-bootstrap'

class NavBarMenu extends Component {
    render() {
        return (
              <Navbar bg="light" expand="lg">
                <Navbar.Brand ><Link to="/" >Resto</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link><Link to="/" >Home </Link></Nav.Link>
                    <Nav.Link><Link to="/list" >List</Link></Nav.Link>
                    <Nav.Link><Link to="/create" >Create</Link></Nav.Link>
                    <Nav.Link><Link to="/search" >Search</Link></Nav.Link>
                    { 
                    localStorage.getItem('login') ?
                    <Nav.Link ><Link to="/logout" >Logout</Link></Nav.Link>
                    :
                    <Nav.Link ><Link to="/login" >Login</Link></Nav.Link>
                    }
                    </Nav>
                </Navbar.Collapse>
              </Navbar>
        );
    }
}

export default NavBarMenu;