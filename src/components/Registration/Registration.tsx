import React from 'react';
import Title from '../_common_/Title';
import RegIpt from './RegIpt';
import RegBtn from './RegBtn';
import { StContainer, StGlobalCredentials } from '../Auth/styled';
import RegNav from './RegNav';

const Registration = () => {
  return (
    <>
      <StGlobalCredentials>
        <StContainer>
          <Title title="signUpTitle" />
          <RegIpt type="login" />
          <RegIpt type="password" />
          <RegIpt type="confirm" />
          <RegBtn />
          <RegNav />
        </StContainer>
      </StGlobalCredentials>
    </>
  );
};

export default Registration;
