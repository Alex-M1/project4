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
import HeaderRouteGames from './HeaderRouteGames';

interface IProps {
  location: Location,
  leaveRoom: () => void
}

const Header: React.FC<IProps> = ({ location, leaveRoom }) => {
  const path = location.pathname;
  const isExit = useMemo(() => {
    if (path === CLIENT.authClient || path === CLIENT.regClient) {
      return null;
    } 
      return <HeaderLogout />;
  }, [location.pathname]);
  const isNav = useMemo(() => {
    if (path === CLIENT.authClient || path === CLIENT.regClient) {
      return null;
    } 
    if (path.startsWith(CLIENT.ticTacClient) || path.startsWith(CLIENT.checkers)) {
      return <HeaderRouteGames/>;
    }
      return <HeaderRoute location={location}/>;
  }, [location.pathname]);
  const { colors, theme } = useTheme();
  const handleLeaveRoom = () => leaveRoom();
  return (
    <StHeader
      theme={theme}
      colors={colors}
    >
      <StHeaderContainer>
        <StNavContainer>
          <Link to={CLIENT.main} onClick={handleLeaveRoom}>
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
          {isExit}
        </StNavContainer>
      </StHeaderContainer>
    </StHeader>
  );
};

export default Header;
