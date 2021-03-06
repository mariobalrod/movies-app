import React, {Component} from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Star';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';

//Actions
import { getLists } from '../helpers/listsActions';

import ListContainer from '../components/lists/ListContainer';
import ListForm from '../components/lists/ListForm';

export default class Movies extends Component {

    constructor (props) {
        super(props);
        this.state = {
            show: false,
            lists: []
        }
    }

    componentDidMount() {
        if(!this.props.currentUser) {
            this.props.history.push('/');
        }

        this.fetchList(this.props.currentUser._id)
    }

    async fetchList (user) {
        const listsF = await getLists(user);
        this.setState({lists: listsF})
    }

    render () {
        let form = this.state.show ? <ListForm  warningToast={this.props.warningToast} currentUser={this.props.currentUser} /> : '';
        const {lists} = this.state;
        return (
            <div className="mt-5">
                <div>
                    <h1 style={{textAlign: "center", marginBottom: 60}}>All your Lists</h1>
                </div>
                <div className="mt-5 mx-auto px-0" style={{width: 70}}>
                    <Button onClick={() => this.setState({ show: !this.state.show})} variant="dark" block><PlaylistAddRoundedIcon/></Button>
                </div>
                {form}
                <Nav variant="tabs" className="mx-auto justify-content-center" style={{ marginTop: 80, width: 1500 }}>
                    <Nav.Item className="mb-3">
                        Default Lists
                    </Nav.Item>
                </Nav>
                <div className="container1">
                    <div className="container2">
                        <Link to={{
                                pathname: "/lists/favorita",
                                state: {
                                    lists: lists
                                }
                            }} className="linkList">
                            <Card className="animated flipInY" style={{ width: 300, margin: 50 }}>
                                <Card.Body>
                                    <StarIcon className="mx-auto" style={{ fontSize: 250 }} />
                                </Card.Body>
                                <Card.Footer className="text-muted" style={{textAlign: "center"}}>Favoritos</Card.Footer>
                            </Card>
                        </Link>
                        <Link to={{
                                pathname: "/lists/vista",
                                state: {
                                    lists: lists
                                }
                            }} className="linkList">
                            <Card className="animated flipInY" style={{ width: 300, margin: 50 }}>
                                <Card.Body>
                                    <VisibilityOffRoundedIcon className="mx-auto" style={{ fontSize: 250 }} />
                                </Card.Body>
                                <Card.Footer className="text-muted" style={{textAlign: "center"}}>Vistos</Card.Footer>
                            </Card>
                        </Link>
                        <Link to={{
                                pathname: "/lists/pendiente",
                                state: {
                                    lists: lists
                                }
                            }} className="linkList">
                            <Card className="animated flipInY" style={{ width: 300, margin: 50 }}>
                                <Card.Body>
                                    <VisibilityRoundedIcon className="mx-auto" style={{ fontSize: 250 }} />
                                </Card.Body>
                                <Card.Footer className="text-muted" style={{textAlign: "center"}}>Pendientes</Card.Footer>
                            </Card>
                        </Link>

                        <ListContainer currentUser={this.props.currentUser} lists={lists}/>
                    </div>
                </div>
            </div>
        );
    }

}