import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

import Messages from '../components/Messages';

export default class SignUp extends Component {

    constructor () {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            messages: [],
            warning: true
        }
    }

    handleSubmit = (e) => {
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.hay) {
                    const errors = data.errors.map((error, index) => {
                        const txt = error.text;
                        return {key: index, txt}
                    });
                    
                    this.setState({
                        messages: errors,
                        password: '',
                        confirmPassword: ''
                    });
                    
                } else {
                    const newMessage = [{key: 0, txt: 'Registrado con éxito!'}]
                    this.setState({
                        email: '',
                        username: '',
                        password: '',
                        confirmPassword: '',
                        messages: newMessage, 
                        warning: false
                    });
                }
            })
            .catch(err => console.error(err));

        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    render () {

        return (
            <div>
                <div>
                    {
                        (this.state.messages.length > 0) ? <Messages messages={this.state.messages} warning={this.state.warning}/> : ''
                    }
                </div>

                <Form className="mx-auto mt-5 animated flipInY" style={{ width: 300 }} onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" value={this.state.email} size="sm" type="email" placeholder="name@example.com" autoFocus onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={this.state.username} size="sm" type="text" placeholder="name111" onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={this.state.password} size="sm" type="password" onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="confirmPassword" value={this.state.confirmPassword} size="sm" type="password" onChange={this.handleChange} required />
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
