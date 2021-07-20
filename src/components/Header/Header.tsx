import React, { useMemo } from 'react';
import { Location } from 'history';
import { StHeader, StLogo } from './styled';
import HeaderTheme from './HeaderTheme';
import HeaderLanguage from './HeaderLanguage';
import HeaderRoute from './HeaderRoute';

interface IProps {
  location: Location
}

const Header: React.FC<IProps> = ({ location }: IProps) => {
  const isNav = useMemo(() => {
    const path = location.pathname;
    if (path === '/' || path === '/signup') {
      return null;
    }
    return <HeaderRoute />;
  }, [location.pathname]);

  return (
    <StHeader>
      <StLogo
        src="src/assets/img/logo.png"
        alt="logo"
      />
      {isNav}
      <HeaderTheme />
      <HeaderLanguage />
    </StHeader>
  );
};

export default Header;
