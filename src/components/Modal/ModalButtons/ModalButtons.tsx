import React from 'react';
import { StButton } from 'common/Button/styled';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks/useTheme';
import { StButtonGroup } from '../styled';

interface IProps {
    tex: string;
    text: string;
    handleCloseModal: () => void;
} 

const ModalButtons: React.FC <IProps> = ({ handleCloseModal, text, tex }: IProps) => {
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
