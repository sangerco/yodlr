import React, {useState} from 'react';
import { createNewUser } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Grid, Segment, Form, Button, Header } from 'semantic-ui-react';

const NewUser = () => {
    const dispatch = useDispatch();

    const initialState = {
        email: '',
        firstName: '',
        lastName: '',
        status: 'pending'
    }

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createNewUser(formData));

        setFormData(initialState)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={8}>
                    <div>
                        <Segment raised>
                            <Form type='submit' onSubmit={handleSubmit}>
                                <Header as='h2'>Please Fill Out the Following Form:</Header>
                                <Form.Field>
                                    <label htmlFor='email'></label>
                                    <input type='text' name='email'  value={formData.email} onChange={handleChange} placeholder='Email'/>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='firstName'></label>
                                    <input type='text' name='firstName'  value={formData.firstName} onChange={handleChange} placeholder='First Name'/>
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='lastName'></label>
                                    <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name'/>
                                </Form.Field>
                                <Button color='green' type='submit'>Create User</Button>
                            </Form>
                        </Segment>
                    </div>
                </Grid.Column>
                <Grid.Column width={4}></Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default NewUser;