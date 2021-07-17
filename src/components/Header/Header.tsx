import React from 'react';
import { StHeader, StLogo } from './styled';
import HeaderTheme from './HeaderTheme';
import HeaderLanguage from './HeaderLanguage';

const Header: React.FC = () => (
  <StHeader>
    <StLogo
      src="src/assets/img/logo.png"
      alt="logo"
    />
    <HeaderTheme />
    <HeaderLanguage />
  </StHeader>
);

export default Header;
