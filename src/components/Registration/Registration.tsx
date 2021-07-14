import React from 'react';

import Title from '../_common_/Title';
import RegForm from './RegForm';
import RegBtn from './RegBtn';
import { StContainer, StGlobalCredentials } from '../Auth/styled';
import RegNavigation from './RegNavigation';
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
          <RegForm type="login" />
          <RegForm type="password" />
          <RegForm type="confirm" />
          <RegBtn />
          <RegNavigation />
        </StContainer>
      </StGlobalCredentials>
    </>
  );
};

export default Registration;
