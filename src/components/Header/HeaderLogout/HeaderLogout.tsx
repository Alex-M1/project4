import React from 'react';
import { NavLink } from 'react-router-dom';
import { url } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StDoor } from './styled';

const HeaderLogout = () => {
    const { colors, theme } = useTheme();
    return (
        <NavLink to={url.authClient}>
            <StDoor
                src={url.logo}
                theme={theme}
                colors={colors}
            />
        </NavLink>
    );
};
export default HeaderLogout;
