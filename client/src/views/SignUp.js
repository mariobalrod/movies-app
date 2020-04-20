import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

import httpClient from '../httpClient';

export default class SignUp extends Component {

    constructor () {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        httpClient.signUp(this.state).then(user => {
			this.setState({ 
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
            });
			if(user) {
				this.props.onSignUpSuccess(user);
				this.props.history.push('/');
			}
		})
    }

    render () {

        return ( 

            <Form className="mx-auto mt-5 animated flipInY" style={{ width: 300 }} onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" value={this.state.email} size="sm" type="email" placeholder="name@example.com" autoFocus onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" value={this.state.username} size="sm" type="text" placeholder="name111" onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" value={this.state.password} size="sm" type="password" onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmPassword" value={this.state.confirmPassword} size="sm" type="password" onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required />
                </Form.Group>
                <Button className="mx-auto mt-4" variant="primary" type="submit" block>Register</Button>
            </Form>

        );
    }

}
