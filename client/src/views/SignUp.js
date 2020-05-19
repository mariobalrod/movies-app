import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

import httpClient from '../helpers/httpClient';

import Messages from '../components/partials/Messages';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {

    constructor () {
        super();
        this.state = {
            fields: {
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
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
        e.preventDefault();
        httpClient.signUp(this.state.fields)
            .then(data => {
                if(data.success) {
                    this.setState({ 
                        email: '',
                        username: '',
                        password: '',
                        confirmPassword: ''
                    });
                    
                    this.props.onSignUpSuccess(data.user);
                    this.props.history.push('/');
                } else {
                    // Errores de registro
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

                <Link to="/login"><Button className="mx-auto mt-4" variant="dark" type="submit" style={{width: 300}} block>I have an account</Button></Link>

                <Form className="mx-auto mt-5 animated flipInY" style={{ width: 300 }} onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" value={this.state.fields.email} size="sm" type="email" placeholder="name@example.com" autoFocus onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={this.state.fields.username} size="sm" type="text" placeholder="name111" onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={this.state.fields.password} size="sm" type="password" onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="confirmPassword" value={this.state.fields.confirmPassword} size="sm" type="password" onChange={this.handleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" required />
                    </Form.Group>
                    <Button className="mx-auto mt-4" variant="primary" type="submit" block>Register</Button>
                </Form>
            </div>

        );
    }

}
