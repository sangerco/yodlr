import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:5000';

const initialState = {
    user: null,
    users: null, 
    error: null
};

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await axios.get(`${URL}/users`);
        const users = response.data;
        return users;
    }
)

export const createNewUser = createAsyncThunk(
    'users/createUser',
    async (newUserData) => {
        const response = await axios.post(`${URL}/users`, newUserData);
        const user = response.data;
        return user;
    }
)

export const fetchOneUser = createAsyncThunk(
    `users/fetchOneUser`,
    async (id) => {
        const response = await axios.get(`${URL}/users/${id}`);
        const user = response.data;
        return user;
    }
)

export const deleteUser = createAsyncThunk(
    `users/deleteUser`,
    async (id) => {
        await axios.delete(`${URL}/users/${id}`);
        return null
    }
)

export const updateUser = createAsyncThunk(
    `users/updateUser`,
    async (updateUserData) => {
        const response = await axios.put(`${URL}/users/${updateUserData.id}`, updateUserData);
        const user = response.data;
        return user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.user = null;
                state.users = action.payload;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = action.payload;
            })
            .addCase(createNewUser.pending, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = null;
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.users = null;
                state.error = null;
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = action.payload;
            })
            
            .addCase(fetchOneUser.pending, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = null;
            })
            .addCase(fetchOneUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.users = null;
                state.error = null;
            })
            .addCase(fetchOneUser.rejected, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = action.payload;
            })
            
            .addCase(deleteUser.pending, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.users = null;
                state.error = null;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = action.payload;
            })           
            .addCase(updateUser.pending, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.users = null;
                state.error = null;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.user = null;
                state.users = null;
                state.error = action.payload;
            })
    }
})

export default userSlice.reducer;