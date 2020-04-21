import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

export default class Movies extends Component {

    constructor () {
        super();
        this.state = {}
    }

    componentDidMount() {
        if(!this.props.currentUser) {
            this.props.history.push('/');
        }
    }

    render () {
        return (
            <div className="container1">
                <div className="container2">
                    <Link to="/lists/favorita" className="linkList">
                        <Card className="animated flipInY" style={{ width: 300, margin: 50 }}>
                            <Card.Body>
                                <StarIcon className="mx-auto" style={{ fontSize: 250 }} />
                            </Card.Body>
                            <Card.Footer className="text-muted" style={{textAlign: "center"}}>Favoritos</Card.Footer>
                        </Card>
                    </Link>
                    <Link to="/lists/vista" className="linkList">
                        <Card className="animated flipInY" style={{ width: 300, margin: 50 }}>
                            <Card.Body>
                                <VisibilityOffRoundedIcon className="mx-auto" style={{ fontSize: 250 }} />
                            </Card.Body>
                            <Card.Footer className="text-muted" style={{textAlign: "center"}}>Vistos</Card.Footer>
                        </Card>
                    </Link>
                    <Link to="/lists/pendiente" className="linkList">
                        <Card className="animated flipInY" style={{ width: 300, margin: 50 }}>
                            <Card.Body>
                                <VisibilityRoundedIcon className="mx-auto" style={{ fontSize: 250 }} />
                            </Card.Body>
                            <Card.Footer className="text-muted" style={{textAlign: "center"}}>Pendientes</Card.Footer>
                        </Card>
                    </Link>
                </div>
            </div>
        );
    }

}