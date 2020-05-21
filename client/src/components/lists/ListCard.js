import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Actions
import { deleteList } from '../../helpers/listsActions';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';

const ListCard = (props) => {

    const id = props.list._id;
    const name = props.list.name;

    return (
        <div className="custom">
            <div className="mx-auto mb-2" style={{width: 30}}>
                <DeleteForeverIcon className="deleteList" onClick={() => deleteList(id)}/>
            </div>
            <Link to={{
                pathname: `/lists/${name}`,
                state: {
                    lists: props.lists
                }
            }} className="linkList">
                <Card className="animated flipInY" style={{ width: 300, margin: 50, marginTop: 0 }}>
                    <Card.Body>
                        <TheatersRoundedIcon className="mx-auto" style={{ fontSize: 250 }} />
                    </Card.Body>
                    <Card.Footer className="text-muted" style={{ textAlign: "center" }}>{name}</Card.Footer>
                </Card>
            </Link>
        </div>
    )
}

export default ListCard;