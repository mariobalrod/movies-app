import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Settings from '@material-ui/icons/SettingsApplicationsRounded';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" style={{marginLeft: 70}}>Movies App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" style={{marginRight: 120}}>

                    <Nav.Link className="margin-nav-links" href="/signin">Sign In</Nav.Link>

                    <Nav.Link className="margin-nav-links" href="/signup">Sign Up</Nav.Link>

                    <Nav.Link className="margin-nav-links" href="/movies">Movies</Nav.Link>

                    <Nav.Link className="margin-nav-links" href="/profile">Profile</Nav.Link>

                    <NavDropdown className="margin-nav-links-dd" title={<Settings style={{ fontSize: 30 }}/>} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Configuration</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;