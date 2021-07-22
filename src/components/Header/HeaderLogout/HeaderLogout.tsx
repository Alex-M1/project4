import React from 'react';
import { NavLink } from 'react-router-dom';
import { CLIENT } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StDoor } from './styled';

const HeaderLogout = () => {
    const { colors, theme } = useTheme();
    return (
        <NavLink to={CLIENT.authClient}>
            <StDoor
                src={CLIENT.logo}
                theme={theme}
                colors={colors}
            />
        </NavLink>
    );
};
export default HeaderLogout;
