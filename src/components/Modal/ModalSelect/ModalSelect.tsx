import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { StSelect } from './styled';

const ModalSelect = () => {
    const { colors, theme } = useTheme();
    return (
        <StSelect
            colors={colors}
            theme={theme}
        >
            <option>Tic Tac Toe</option>
            <option>Checkers</option>
        </StSelect>
    );
};
export default ModalSelect;
