import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = (props) => {
    
    return (
        <Form className="mx-auto mt-5 animated flipInY" style={{ width: 300 }} onSubmit={props.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Busca alguna pelicula..." onChange={props.handleChange} value={props.searchTerm}/>
            </Form.Group>
        </Form>
    );

}

export default SearchBar;