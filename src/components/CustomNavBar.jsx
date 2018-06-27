import React, { Component } from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavBar extends Component {
    render() {
        return (
         <Navbar default collapseOnSelect >
         <Navbar.Header>
             <Navbar.Brand>
                 <Link to="/">C L S</Link>
             </Navbar.Brand>
            <Navbar.Toggle />
         </Navbar.Header>
        <Navbar.Collapse>
         <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to ="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/quotes" to ="/quotes">
              Quotes
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/profile" to ="/profile">
              Profile
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/resume" to ="/resume">
              Resume
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/contact" to ="/contact">
              Contact
            </NavItem>
          </Nav>
          </Navbar.Collapse>
         </Navbar>  
        );
    }
}

export default CustomNavBar;