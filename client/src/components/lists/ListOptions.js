import React from 'react';
import {Nav, NavDropdown} from 'react-bootstrap';

import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const ListOptions = (props) => {

    return (
        <Nav.Item className="listOptions">
            {
                (props.lists.length!==0)
                    ? (
                        <NavDropdown title={<MoreHorizOutlinedIcon className="linkListOptions" style={{ fontSize: 30 }} />} id="collasible-nav-dropdown">
                            {
                                props.lists.map((list, i) => {
                                    return (
                                        <NavDropdown.Item key={i} href="#" onClick={() => console.log(list.name)}>{list.name}</NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                    ) : ( 
                        <NavDropdown title={<MoreHorizOutlinedIcon className="linkListOptions" style={{ fontSize: 30 }} />} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">No custom lists</NavDropdown.Item>
                        </NavDropdown>
                    )
            }
        </Nav.Item>
    )
}

export default ListOptions;