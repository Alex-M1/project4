import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { StDoor } from './styled';

const HeaderLogout = () => {
    const { colors, theme } = useTheme();
    return (
        <StDoor
            theme={theme}
            colors={colors}
            src='src/assets/img/logout.svg'
        />
    );
};
export default HeaderLogout;
