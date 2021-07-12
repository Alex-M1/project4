import React from 'react';

import Input from '../_common_/Input';
import Button from '../_common_/Button';

const Auth = () => {
    return(
        <>
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
                <Button text="Sign In"/>
            </div>
        </>
    )
}

export default Auth;