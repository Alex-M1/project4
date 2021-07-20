import React from 'react';
import { StButton } from 'common/Button/styled';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import { StButtonGroup } from '../styled';

interface IProps {
    tex: string;
    text: string;
    handleCloseModal: () => void;
    handleCreateRoom: () => void;
} 

const ModalButtons: React.FC <IProps> = ({ 
        tex, 
        text, 
        handleCloseModal, 
        handleCreateRoom, 
    }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();

    return (
        <StButtonGroup 
            theme={theme}
            colors={colors}
        >
        <StButton
            theme={theme}
            colors={colors}
            onClick={handleCreateRoom}
        >
            {t(text)}
        </StButton>
        <StButton 
            theme={theme}
            colors={colors}
            onClick={handleCloseModal}
        >
            {t(tex)}
        </StButton>
        </StButtonGroup>  
    );
};
export default ModalButtons;
