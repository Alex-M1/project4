import React from 'react';
import Title from 'common/Title';
import { useTheme } from '../hooks/useTheme';
import AuthIpt from './AuthIpt';
import AuthBtn from './AuthBtn';
import { StGlobalCredentials, StContainer } from './styled';
import AuthNav from './AuthNav';

const Auth: React.FC = () => {
  const { colors, theme } = useTheme();

  return (
    <>
      <StGlobalCredentials>
        <StContainer
          theme={theme}
          colors={colors}
        >
          <Title title="sign_in_title" />
          <AuthIpt type="login" />
          <AuthIpt type="password" />
          <AuthBtn />
          <AuthNav />
        </StContainer>
      </StGlobalCredentials>
    </>
  );
};

export default Auth;
