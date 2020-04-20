import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Settings from '@material-ui/icons/SettingsApplicationsRounded';

const NavBar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" style={{marginLeft: 40}}>Movies App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">   
                {props.currentUser
                    ? (
                        <Nav className="ml-auto" style={{ marginRight: 120 }}>
                            <Nav.Link className="margin-nav-links" href="/movies">Movies</Nav.Link>

                            <Nav.Link className="margin-nav-links" href="/profile">Profile</Nav.Link>

                            <NavDropdown className="margin-nav-links-dd" title={<Settings style={{ fontSize: 30 }} />} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#disabled">Configuration</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    )

                    : (

                        <Nav className="ml-auto" style={{ marginRight: 120 }}>
                            <Nav.Link className="margin-nav-links" href="/login">Login</Nav.Link>
                            <Nav.Link className="margin-nav-links" href="/signup">Sign Up</Nav.Link>
                        </Nav>
                    )
                }                
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;