import React, { useMemo } from 'react';
import { Location } from 'history';
import { CLIENT } from 'constants/urls';
import { Link } from 'react-router-dom';
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
    if (path === CLIENT.authClient || path === CLIENT.regClient) {
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
          <Link to={CLIENT.main}>
            <StLogo
              src="src/assets/img/logo.png"
              alt="logo"
              theme={theme}
              colors={colors}
            />
          </Link>
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
