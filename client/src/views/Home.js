import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default class Home extends Component {

    render () {
        return (
            <Card className="my-auto text-center">
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
        );
    }

}