import React, {useState, useEffect} from 'react';
import {Nav, NavDropdown} from 'react-bootstrap';

//Actions
import { getLists } from '../../helpers/listsActions';

import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const ListOptions = (props) => {

    return (
        <Nav.Item className="listOptions">
            {console.log(props.lists.length)}
            {
                (props.lists.length!==0)
                    ? (
                        <NavDropdown title={<MoreHorizOutlinedIcon className="linkListOptions" style={{ fontSize: 30 }} />} id="collasible-nav-dropdown">
                            {
                                props.lists.map((list, i) => {
                                    return (
                                        <NavDropdown.Item key={i} href="#" onClick={() => console.log(list.id)}>{list.name}</NavDropdown.Item>
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