import React from 'react';
import { StButton } from 'common/Button/styled';
import { useTheme } from '../../hooks/useTheme';
import { StButtonGroup } from '../styled';

interface IProps {
    handleCloseModal: () => void;
} 

const ModalButtons: React.FC <IProps> = ({ handleCloseModal }: IProps) => {
    const { colors, theme } = useTheme();
    return (
        <StButtonGroup 
            colors={colors}
            theme={theme}
        >
        <StButton
            colors={colors}
            theme={theme}
        >
            create_btn
        </StButton>
        <StButton 
            colors={colors}
            theme={theme}
            onClick={handleCloseModal}
        >
            cancel_btn
        </StButton>
        </StButtonGroup>  
    );
};
export default ModalButtons;
