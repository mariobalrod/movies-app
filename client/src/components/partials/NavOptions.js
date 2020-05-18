import React from 'react';
import {Nav} from 'react-bootstrap';

class NavOptions extends React.Component {

    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <Nav variant="tabs" className="justify-content-center" style={{marginTop: 50}}> 

                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="linkList" onClick={this.props.changeToPopular}>
                        Popular
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="linkList"  onClick={this.props.changeToRated} >
                        Top Rated
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-3" className="linkList"  onClick={this.props.changeToUpcoming} >
                        Upcoming
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        );
    }
}

export default NavOptions;