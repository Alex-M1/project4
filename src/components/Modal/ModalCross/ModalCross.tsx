import React from 'react';
import { StCrossBtn } from './styled';
import { useTheme } from '../../hooks/useTheme';

interface IProps {
    handleCloseModal: () => void;
}

const ModalCross: React.FC <IProps> = ({ handleCloseModal }) => {
    const { colors, theme } = useTheme();
    return (
        <StCrossBtn 
            theme={theme}
            colors={colors}
            onClick={handleCloseModal}
        >
            x
        </StCrossBtn>
    );
};

export default ModalCross;
