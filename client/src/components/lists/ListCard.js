import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';

const ListCard = (props) => {

    const name = props.list.name;
    const description = props.list.description;

    return (
        <Link to={`/lists/${name}`} className="linkList">
            <Card className="animated flipInY" style={{ width: 300, margin: 50 }}>
                <DeleteForeverIcon className="deleteList" />
                <Card.Body>
                    <TheatersRoundedIcon className="mx-auto" style={{ fontSize: 250 }} />
                </Card.Body>
                <Card.Footer className="text-muted" style={{ textAlign: "center" }}>{name}</Card.Footer>
            </Card>
        </Link>
    )
}

export default ListCard;