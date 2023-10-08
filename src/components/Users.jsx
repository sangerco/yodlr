import React, { useEffect } from "react";
import { fetchUsers } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Segment, List } from "semantic-ui-react";

const Users = () => {
    const dispatch = useDispatch();

    let users;

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch, users])

    users = useSelector((state) => state.users)

    console.log(users)

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
                                            <List.Item as='a' key={user.id} href={`/users/${user.id}`}>{user.firstName} {user.lastName}</List.Item>
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

export default Users;