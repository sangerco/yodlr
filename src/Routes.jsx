import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NewUser from './components/NewUser';
import Users from './components/Users';
import User from './components/User';
import Admin from './components/Admin';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/users/:id' element={<User />} />
            <Route path='/users/new_user' element={<NewUser />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
    )
}

export default AppRoutes;