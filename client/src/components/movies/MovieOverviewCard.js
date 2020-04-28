import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Row, Col} from 'react-bootstrap';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const MovieOverwiewCard = (props) => {
    const image = props.poster_path;
    const title = props.title;
    const descripcion = props.overview;
    const web = props.homepage;
    const votation = props.vote_average;
    return(       
        <Card className="mx-auto overviewCard mt-5 animated flipInY" style={{width: 700}} sm>
            <Card.Header>
                <Link to="/">
                    <KeyboardBackspaceIcon />
                </Link>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col className="mx-2" sm>
                        <Card.Img src={`https://image.tmdb.org/t/p/w342${image}`} alt="portada"/>
                    </Col>
                    <Col className="mx-4" sm>
                        <Row className="my-5" >
                            <h4 className="mx-auto">{title}</h4>
                            <Card.Text className="mt-3">{descripcion}</Card.Text>  
                            <h1 className="mt-4 mx-auto">{votation}</h1>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer style={{textAlign: "center"}}>
                <Card.Link href={web} target="_blank">
                    {web}
                </Card.Link>
            </Card.Footer>
        </Card> 
    );
}

export default MovieOverwiewCard;