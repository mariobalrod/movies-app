import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

import httpClient from '../helpers/httpClient';

import Messages from '../components/partials/Messages';

export default class LogIn extends Component {

    constructor () {
        super();
        this.state = {
            fields: {
                username: '',
                password: ''
            },
            errorMessages: []
        }
    }

    componentDidMount() {
        if(this.props.currentUser) {
            this.props.history.push('/');
        }
    }

    handleChange = (e) => {
        this.setState ({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => {
		e.preventDefault()
        httpClient.logIn(this.state.fields)
            .then(data => {
                if(data.success) {
                    // Hay usuario
                    this.setState({ 
                        fields: {
                            username: '',
                            password: ''
                        }
                    });

                    this.props.onLoginSuccess(data.user);
                    this.props.history.push('/');

                } else {
                    // Errores de Inicio de sesion
                    this.setState({
                        errorMessages: data.errorMessages
                    })

                }
            })
	}

    render () {
        return (
            <div>
                
                {
                    (this.state.errorMessages) ? <Messages messages={this.state.errorMessages} /> : ''
                }

                <Form className="mx-auto mt-5 animated flipInY" style={{ width: 300 }} onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={this.state.fields.username} size="sm" type="text" placeholder="name111" onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={this.state.fields.password} size="sm" type="password" onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Button className="mx-auto mt-4" variant="primary" type="submit" block>Login</Button>
                </Form>
            </div>
        );
    }

}
