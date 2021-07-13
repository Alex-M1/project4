import React from 'react';

import Title from 'common/Title';
import RegIpt from './RegIpt';
import RegBtn from './RegBtn';
import { StContainer, StGlobalCredentials } from '../Auth/styled';
import RegNav from './RegNav';
import { useTheme } from '../hooks/useTheme';

const Registration = () => {
  const { colors, theme } = useTheme();
  return (
    <>
      <StGlobalCredentials>
        <StContainer
          theme={theme}
          colors={colors}
        >
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
