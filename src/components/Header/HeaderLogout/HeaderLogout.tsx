import React from 'react';
import { NavLink } from 'react-router-dom';
import { client } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StDoor } from './styled';

const HeaderLogout = () => {
    const { colors, theme } = useTheme();
    return (
        <NavLink to={client.authClient}>
            <StDoor
                src={client.logo}
                theme={theme}
                colors={colors}
            />
        </NavLink>
    );
};
export default HeaderLogout;
