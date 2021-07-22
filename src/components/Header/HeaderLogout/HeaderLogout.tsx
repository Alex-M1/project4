import React from 'react';
import { NavLink } from 'react-router-dom';
import { CLIENT } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { cookieMaster } from 'src/helpers/cookieMaster';
import { StDoor } from './styled';

const HeaderLogout = () => {
    const { colors, theme } = useTheme();
    const handleExit = () => {
        cookieMaster.deleteCookie('token');
    };
    return (
        <NavLink onClick={handleExit} to={CLIENT.authClient}>
            <StDoor
                src={CLIENT.logo}
                theme={theme}
                colors={colors}
            />
        </NavLink>
    );
};
export default HeaderLogout;
