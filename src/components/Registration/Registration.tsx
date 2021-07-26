import React from 'react';
import Title from 'common/Title';
import RegForm from './RegForm';
import RegBtn from './RegBtn';
import { StContainer, StGlobalCredentials } from '../Auth/styled';
import RegNavigation from './RegNavigation';
import { useTheme } from '../hooks/useTheme';

const Registration: React.FC = () => {
  const { colors, theme } = useTheme();
  return (
    <>
      <StGlobalCredentials>
        <StContainer
          theme={theme}
          colors={colors}
        >
          <Title title="sign_up_title" />
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
