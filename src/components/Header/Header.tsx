import React, { useContext } from 'react';

import { StHeader, StLogo } from './styled';
import { Theme } from '../hocs';

const Header: React.FC = () => {
    const { theme, changeTheme } = useContext(Theme);
    const toggleThemeMode = () => {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
      };

    return (
        <StHeader>
            <StLogo src="src/assets/img/logo.png" alt="logo"/>
            <button
                onClick={toggleThemeMode}
            >
                x
            </button>
        </StHeader>
    );
};

export default Header;
