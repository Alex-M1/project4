import React, { useContext, useMemo } from 'react';

import { StHeader, StLogo } from './styled';
import { Theme } from '../hocs';
import HeaderTheme from './HeaderTheme';
import HeaderLanguage from './HeaderLanguage';
import HeaderRoute from './HeaderRoute';

const Header: React.FC = ({ location }) => {
    const { theme, changeTheme } = useContext(Theme);
    const toggleThemeMode = () => {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
      };
    const isNav = useMemo(() => {
        const path = location.pathname;
        if (path === '/' || path === '/signup') {
            return null;
        }
        return <HeaderRoute/>;
    }, [location.pathname]);

    return (
        <StHeader>
            <StLogo 
                src="src/assets/img/logo.png" 
                alt="logo"
            />
            {isNav}
            <HeaderTheme 
                toggleThemeMode={toggleThemeMode}
            />
            <HeaderLanguage text="En" />
        </StHeader>
    );
};

export default Header;
