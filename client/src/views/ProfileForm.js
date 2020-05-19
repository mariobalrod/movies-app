import React, {useState, useEffect} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import {useHistory, Link} from 'react-router-dom';

import {changeUserDescription, fetchDescription} from '../helpers/usersActions';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

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
        props.successToast('Description Update')
    }   

    return (
        <Card className="mx-auto overviewCard mt-5 animated flipInY" style={{width: 500}} sm>
            <Form className="mx-auto mt-5" style={{width: 400}} onSubmit={handleSubmit}>
                <Link to="" onClick={() => history.goBack()}><KeyboardBackspaceIcon /></Link>
                <div className="mt-3">
                    <h3 style={{textAlign: "center"}}>Edit your description</h3>
                </div>
                <div  className="mt-5">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control name="description" as="textarea" rows="3" onChange={handleChange} value={description}/>
                    </Form.Group>
                </div>
                <Button className="my-5 mx-auto" variant="primary" type="submit" style={{width: 300}} block>
                    Save changes
                </Button>
            </Form>
        </Card>
    );
}

export default ProfileForm;