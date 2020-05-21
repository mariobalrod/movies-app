import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

import { createList } from '../../helpers/listsActions';

const ListForm =(props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createList(name, description, props.currentUser._id);
        window.location.reload(true);
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <Form className="mx-auto mt-5 animated flipInY" style={{ width: 300 }} onSubmit={handleSubmit}>
            <h5 style={{textAlign: "center"}}>Create a new List</h5>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="title" value={name} size="sm" type="text" autoFocus onChange={handleChangeName} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" value={description} size="sm" as="textarea" rows="3" onChange={handleChangeDescription} />
            </Form.Group>
            <Button className="mx-auto mt-4" variant="primary" type="submit" block>Save</Button>
        </Form>
    )
}

export default ListForm;