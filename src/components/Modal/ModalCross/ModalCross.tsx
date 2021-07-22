import React from 'react';
import { StCrossBtn } from './styled';
import { useTheme } from '../../hooks/useTheme';

interface IProps {
    onCloseModal: () => void;
}

const ModalCross: React.FC <IProps> = ({ onCloseModal }) => {
    const { colors, theme } = useTheme();
    return (
        <StCrossBtn 
            theme={theme}
            colors={colors}
            onClick={onCloseModal}
        />
    );
};

export default ModalCross;
