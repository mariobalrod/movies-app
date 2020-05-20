import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';

const ListCard = (props) => {
    return (
        <Link to="/lists/favorita" className="linkList">
            <Card className="animated flipInY" style={{ width: 300, margin: 50 }}>
                <Card.Body>
                    <TheatersRoundedIcon className="mx-auto" style={{ fontSize: 250 }} />
                </Card.Body>
                <Card.Footer className="text-muted" style={{ textAlign: "center" }}>Favoritos</Card.Footer>
            </Card>
        </Link>
    )
}

export default ListCard;