import React from 'react';
import { NavLink } from 'react-router-dom';
import Title from '../_common_/Title';
import RegIpt from './RegIpt';
import RegBtn from './RegBtn';

const Registration = () => {
  return (
    <>
      <Title title="signUpTitle" />
      <RegIpt type="login" placeholder="login" />
      <RegIpt type="password" placeholder="login" />
      <RegIpt type="confirm" placeholder="login" />
      <RegBtn />
      <p>Already have an account?</p>
      <NavLink to="/">
        Sign In
      </NavLink>
    </>
  );
};

export default Registration;
