import React from 'react';
import { NavLink } from 'react-router-dom';

import Input from '../_common_/Input';
import Button from '../_common_/Button';
import Header from '../Header'

const Auth = () => {
    return(
        <>
            <Header/>
            <h1>Sign In</h1>
            <div>
                <label>Login
                    <Input type="text" placeholder="Enter your login"/>
                </label>
            </div>
            <div>
                <label>Password
                    <Input type="password" placeholder="Enter your password"/>
                </label>
            </div>
            <div>
                <Button text="Sign in"/>
            </div>
            <p>Create an account</p>
            <NavLink to="/signup">
                        Sign Up
            </NavLink>
        </>
    )
}

export default Auth;