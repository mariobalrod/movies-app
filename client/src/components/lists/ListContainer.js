import React, {useState, useEffect} from 'react';
import { Nav } from 'react-bootstrap';

//Actions
import { getLists } from '../../helpers/listsActions';

//Components
import ListCard from './ListCard';

const ListContainer = (props) => {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        const user = props.currentUser._id;
        fetchList(user);
    }, [props.currentUser._id])

    const fetchList = async (user) => {
        const listsF = await getLists(user);
        setLists(listsF);
    }

    return (
        
        <div>
            {console.log('Primer', lists.length)}
            {
                (lists.length !== 0)
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
                                        lists.map((list, i) => {
                                            console.log(lists)
                                            return (
                                                <ListCard key={i} list={list} />
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