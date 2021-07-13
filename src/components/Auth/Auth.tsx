import React from 'react';
import { NavLink } from 'react-router-dom';

import Title from '../_common_/Title';
import AuthIpt from './AuthIpt';
import AuthBtn from './AuthBtn';
import Header from '../Header';
import { StGlobalCredentials, StContainer } from './styled';

const Auth = () => {
  return (
    <>
    <Header />
    <StGlobalCredentials>
        <StContainer>
            <Title title="Sign In" />
            <AuthIpt 
                type="login" 
                placeholder="Enter your login" 
            />
            <AuthIpt 
                type="password" 
                placeholder="Enter your password" 
            />
            <AuthBtn/>
            <p>Create an account</p>
            <NavLink to="/signup">
                Sign Up
            </NavLink>
        </StContainer>
    </StGlobalCredentials>
    </>
  );
};

export default Auth;
