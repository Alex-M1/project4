import React from 'react';
import { NavLink } from 'react-router-dom';
import { client } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { cookieMaster } from 'src/helpers/cookieMaster';
import { StDoor } from './styled';

const HeaderLogout = () => {
    const { colors, theme } = useTheme();
    const handleExit = () => {
        cookieMaster.deleteCookie('token');
    };
    return (
        <NavLink onClick={handleExit} to={client.authClient}>
            <StDoor
                src={client.logo}
                theme={theme}
                colors={colors}
            />
        </NavLink>
    );
};
export default HeaderLogout;
