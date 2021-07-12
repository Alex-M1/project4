import React from 'react';
import { NavLink } from 'react-router-dom';

import Input from '../_common_/Input';
import Button from '../_common_/Button';

const Registration = () => {
    return(
        <>
            <h1>Sign Up</h1>
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
                <label>Confirm password
                    <Input type="password" placeholder="Confirm your password"/>
                </label>
            </div>
            <div>
                <Button text="Sign Up"/>
            </div>
            <p>Already have an account?</p>
            <NavLink to="/">
                        Sign In
            </NavLink>
        </>
    )
}

export default Registration;