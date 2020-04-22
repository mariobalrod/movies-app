import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

// Components
import Messages from '../partials/Messages';

export default class MovieForm extends Component {

    constructor () {
        super();
        this.state = {
            fields: {
                title: '',
                description: '',
                puntuacion: 0,
                director: '',
                categoria: '',
                imgUrl: '',
                idUser: ''
            },
            errorMessages: [],
        }
    }

    componentWillMount() {
        this.setState({
            fields: {
                idUser: this.props.currentUser._id
            }
        });
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
        console.log(this.state)
        /* axios.post('/api/movies')
            .then() */
    }

    render () {

        return ( 

            <div>

                {
                    (this.state.errorMessages) ? <Messages messages={this.state.errorMessages} /> : ''
                }

                <Form className="mx-auto mt-5 animated flipInY" style={{ width: 300 }} onSubmit={this.handleSubmit.bind(this)}>

                    <Form.Group>
                        <Form.Label>Title*</Form.Label>
                        <Form.Control name="title" value={this.state.fields.title} size="sm" type="text" autoFocus onChange={this.handleChange.bind(this)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Director</Form.Label>
                        <Form.Control name="director" value={this.state.fields.director} size="sm" type="text" onChange={this.handleChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description*</Form.Label>
                        <Form.Control name="description" value={this.state.fields.description} size="sm" as="textarea" rows="3" onChange={this.handleChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicRangeCustom">
                        <Form.Label>Puntuacion*</Form.Label>
                        <RangeSlider 
                            size="sm"
                            variant="dark"
                            tooltip="auto"
                            name="puntuacion"
                            min="0"
                            max="10"
                            step="0.5"
                            value={this.state.fields.puntuacion} 
                            onChange={event => this.setState({fields: {puntuacion: event.target.value}})} 
                        />
                    </Form.Group>        

                    <Form.Group controlId="formGridState">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select" name="categoria" value={this.state.fields.categoria} onChange={this.handleChange.bind(this)}>
                            <option>None</option>
                            <option>Favorita</option>
                            <option>Vista</option>
                            <option>Pendiente</option>
                        </Form.Control>
                    </Form.Group>

                    <Button className="mx-auto mt-4" variant="primary" type="submit" block>Save</Button>
                </Form>
            </div>

        );
    }

}