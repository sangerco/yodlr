import React from "react";
import {Link} from 'react-router-dom';
import {Menu, Header} from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu size="small">
            <Menu.Menu>
                <Menu.Item>
                    <Link exact to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link exact to='/users/new_user'>Register</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link exact to='/admin'>Admin</Link>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right" style={{marginTop: '5px', marginRight: '200px'}}>
                <Header as='h1'>Yodlr</Header>
            </Menu.Menu>
        </Menu>
    )
}

export default NavBar;