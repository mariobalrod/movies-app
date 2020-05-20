import React, {useState} from 'react';
import { Nav } from 'react-bootstrap';

//Components
import ListCard from './ListCard';

const ListContainer = (props) => {

    return (
        <div>
            <Nav variant="tabs" className="justify-content-center" style={{ marginTop: 80, width: 1500 }}>
                <Nav.Item className="mb-3">
                    Custom Lists
                </Nav.Item>
            </Nav>
            <div className="container1">
                <div className="container2">
                    <ListCard />
                </div>
            </div>
        </div>
    )
}

export default ListContainer;