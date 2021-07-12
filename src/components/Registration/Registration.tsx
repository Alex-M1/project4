import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../_common_/Button';
import Header from '../Header';
import Title from '../_common_/Title';
import RegIpt from './RegIpt';

const Registration = () => {
  return (
    <>
      <Header />
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
      <div>
        <Button text="Sign up" />
      </div>
      <p>Already have an account?</p>
      <NavLink to="/">
        Sign In
      </NavLink>
    </>
  );
};

export default Registration;
