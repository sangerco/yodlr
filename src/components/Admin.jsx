import React, { useEffect } from "react";
import { fetchUsers, updateUser } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Segment, List, Button } from 'semantic-ui-react';

const Admin = () => {
    const dispatch = useDispatch();

    let users;

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch, users])

    users = useSelector((state) => state.users)

    const activateUser = (user) => {
        const userInfo = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            state: 'active'
        }

        dispatch(updateUser(userInfo));
    }


    if(users) {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={8}>
                            <div>
                                <Segment raised>
                                    <List>
                                        {users.map((user) => (
                                            <div>
                                                <List.Item as='a' key={user.id} href={`/users/${user.id}`}>{user.firstName} {user.lastName}</List.Item>
                                                {user.state === 'pending' ? <Button 
                                                    onClick={() => activateUser(user)}
                                                    color="red"
                                                    size='small'>
                                                        Activate
                                                    </Button> : null}
                                            </div>
                                        ))}
                                    </List>
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
       )
    }

    return null;
}

export default Admin;



