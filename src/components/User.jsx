import React, {useEffect} from "react";
import { fetchOneUser } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Segment, Header } from "semantic-ui-react";

const User = () => {
    const {id} = useParams();
    console.log(id)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchOneUser(id))
    }, [dispatch, id]);

    const user = useSelector((state) => state.user)

    if(user) {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={8}>
                            <div>
                                <Segment raised>
                                    <Header as='h1'>{user.firstName} {user.lastName}</Header>
                                    <Header as='h5'>{user.email}</Header>
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

export default User

