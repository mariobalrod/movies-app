import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import {changeUserDescription, fetchDescription} from '../helpers/usersActions';

const ProfileForm = (props) => {

    const [description, setDescription] = useState('');

    let history = useHistory();

    useEffect(() => {
        const userId = props.currentUser._id;
        obtenerDescripcion(userId);
    }, [props.currentUser._id])

    const obtenerDescripcion = async (userId) => {
        const descriptionF = await fetchDescription(userId);
        setDescription(descriptionF);
    }


    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await changeUserDescription(description, props.currentUser._id);
        history.push('/profile');
    }   

    return (
        <Form className="mx-auto mt-5" style={{width: 400}} onSubmit={handleSubmit}>
            <div className="">
                <h1 style={{textAlign: "center"}}>Edit your description</h1>
            </div>
            <div  className="mt-5">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Set your description</Form.Label>
                    <Form.Control name="description" as="textarea" rows="3" onChange={handleChange} value={description}/>
                </Form.Group>
            </div>
            <Button className="mt-5 mx-auto" variant="primary" type="submit" style={{width: 300}} block>
                Save changes
            </Button>
        </Form>
    );
}

export default ProfileForm;