import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

import httpClient from '../httpClient';

export default class LogIn extends Component {

    constructor () {
        super();
        this.state = {
            fields: {
                username: '',
                password: ''
            }
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

    handleSubmit(e) {
		e.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ 
                fields: {
                    username: '',
                    password: ''
                }
            });
			if(user) {
				this.props.onLoginSuccess(user);
				this.props.history.push('/');
			}
		})
	}

    render () {
        return (
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
        );
    }

}
