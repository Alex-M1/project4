import React, { useContext } from 'react';

import { StHeader, StLogo } from './styled';
import { Theme } from '../hocs';
import HeaderTheme from './HeaderTheme';
import HeaderLanguage from './HeaderLanguage';

const Header: React.FC = () => {
    const { theme, changeTheme } = useContext(Theme);
    const toggleThemeMode = () => {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
      };

    return (
        <StHeader>
            <StLogo 
                src="src/assets/img/logo.png" 
                alt="logo"
            />
            <HeaderTheme 
                toggleThemeMode={toggleThemeMode}
            />
            <HeaderLanguage text="En" />
        </StHeader>
    );
};

export default Header;
