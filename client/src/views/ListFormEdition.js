import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {useHistory, Link} from 'react-router-dom';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { updateList } from '../helpers/listsActions';

const ListFormEdition =(props) => {

    let history = useHistory();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const user_id = props.currentUser._id;
    const id = props.location.state.list_id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(id)
        const response = await updateList(id, name, description, user_id);
        console.log(response)
        if(response.succes === false){
            props.warningToast(response.msg)
        } else {
            history.push('/movies')
        }
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    return (
        <Form className="mx-auto mt-5 animated flipInY" style={{ width: 300 }} onSubmit={handleSubmit} autoComplete="off">
            <Link to="" onClick={() => history.goBack()}><KeyboardBackspaceIcon /></Link>
            <h5 style={{textAlign: "center"}}>Edit your List</h5>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="title" value={name} size="sm" type="text" autoFocus onChange={handleChangeName} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" value={description} size="sm" as="textarea" rows="3" onChange={handleChangeDescription} />
            </Form.Group>
            <Button className="mx-auto mt-4" variant="primary" type="submit" block>Update</Button>
        </Form>
    )
}

export default ListFormEdition;