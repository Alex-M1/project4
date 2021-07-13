import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Title from '../_common_/Title';
import RegIpt from './RegIpt';
import RegBtn from './RegBtn';
import { StContainer, StGlobalCredentials, StNavLink } from '../Auth/styled';

const Registration = () => {
  return (
    <>
      <Header/>
      <StGlobalCredentials>
        <StContainer>
        <Title title="Sign Up" />
        <RegIpt
          type="login"
          placeholder="login"
        />
        <RegIpt
          type="password"
          placeholder="login"
        />
        <RegIpt
          type="confirm"
          placeholder="login"
        />
        <RegBtn />
        <StNavLink>
          <p>Already have an account?</p>
          &nbsp;
          <NavLink to="/">
            Sign In
          </NavLink>
        </StNavLink>
        </StContainer>
      </StGlobalCredentials>
    </>
  );
};

export default Registration;
