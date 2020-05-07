import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';

const NavBar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" style={{marginLeft: 40}}>Movies App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">   
                {props.currentUser
                    ? (
                        <Nav className="ml-auto" style={{ marginRight: 80 }}>
                            <Nav.Link className="margin-nav-links" href="/movies" style={{ marginLeft: 30 }}>
                                <SubscriptionsRoundedIcon style={{ fontSize: 20, marginRight: 10 }} />  Movies
                            </Nav.Link>

                            <Nav.Link className="margin-nav-links" href="/profile" style={{ marginLeft: 30 }}>
                                <PersonRoundedIcon style={{ fontSize: 20, marginRight: 10 }}/>  Profile
                            </Nav.Link>

                            <NavDropdown className="margin-nav-links-dd" title={<MoreVertRoundedIcon style={{ fontSize: 20 }} />} id="collasible-nav-dropdown" style={{ marginLeft: 30 }}>
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