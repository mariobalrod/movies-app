import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Home = (props) => {
    return (
        <div>
            { 
                (props.currentUser)
                ? (
                    <div>
                        <h1>All Movies</h1>
                    </div>
                ) : (
                    <Card className="mx-auto my-5 text-center animated flipInY" style={{width: 700}}>
                        <Card.Header><h1>WELCOME</h1></Card.Header>
                        <Card.Body>
                            <Card.Title><h5>Your Best Option</h5></Card.Title>
                            <Card.Text>
                                Organizes all your Movies with us.
                            </Card.Text>
                            <Link to="/signup"><Button variant="primary">Start</Button></Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">Movies App</Card.Footer>
                    </Card>
                )

            }
        </div>
    );

}

export default Home;