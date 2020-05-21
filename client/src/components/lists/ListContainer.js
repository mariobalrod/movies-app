import React from 'react';
import { Nav } from 'react-bootstrap';

//Components
import ListCard from './ListCard';

const ListContainer = (props) => {

    return (
        
        <div>
            {
                (props.lists.length !== 0)
                    ? (
                        <div>
                            <Nav variant="tabs" className="justify-content-center" style={{ marginTop: 80, width: 1500 }}>
                                <Nav.Item className="mb-3">
                                    Custom Lists
                                </Nav.Item>
                            </Nav>
                            <div className="container1Custom">
                                <div className="container2Custom">
                                    {
                                        props.lists.map((list, i) => {
                                            console.log(list)
                                            return (
                                                <ListCard key={i} idList={list._id} list={list} lists={props.lists} currentUser={props.currentUser}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ) : ( '' )
            }
            
        </div>
    )
}

export default ListContainer;