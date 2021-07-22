import React, { useMemo } from 'react';
import { Location } from 'history';
import { client } from 'constants/urls';
import { StHeader, StLogo, StHeaderContainer, StNavContainer } from './styled';
import HeaderTheme from './HeaderTheme';
import HeaderLanguage from './HeaderLanguage';
import HeaderRoute from './HeaderRoute';
import HeaderLogout from './HeaderLogout';
import { useTheme } from '../hooks/useTheme';

interface IProps {
  location: Location
}

const Header: React.FC<IProps> = ({ location }) => {
  const isNav = useMemo(() => {
    const path = location.pathname;
    if (path === client.authClient || path === client.regClient) {
      return null;
    }
    return <HeaderRoute />;
  }, [location.pathname]);
  const { colors, theme } = useTheme();
  return (
    <StHeader
      theme={theme}
      colors={colors}
    >
      <StHeaderContainer>
        <StNavContainer>
          <StLogo
            theme={theme}
            colors={colors}
            src="src/assets/img/logo.png"
            alt="logo"
          />
        </StNavContainer>
      </StHeaderContainer>
      <StHeaderContainer>
        {isNav}
      </StHeaderContainer>
      <StHeaderContainer>
        <StNavContainer>
          <HeaderTheme />
          <HeaderLanguage />
          <HeaderLogout />
        </StNavContainer>
      </StHeaderContainer>
    </StHeader>
  );
};

export default Header;
