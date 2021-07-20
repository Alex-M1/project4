import React from 'react';
import { useTranslation } from 'react-i18next';
import { StButton } from 'common/Button/styled';
import { IRoom } from 'store/room/types';
import { useTheme } from '../../hooks/useTheme';
import { StButtonGroup } from '../styled';

interface IProps {
    tex: string;
    text: string;
    user: any;
    gameType: string;
    addRoom: (payload: IRoom) => void;
    handleCloseModal: () => void;
} 

const ModalButtons: React.FC <IProps> = ({ 
        tex, 
        text, 
        user,
        addRoom,
        gameType,
        handleCloseModal
    }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    const handleCreateRoom = () => {
        const obj: IRoom = {
            id: Math.random() * 1000,
            loginName: user.login || 'user',
            gameType,
        };
        addRoom(obj);
        handleCloseModal();
    };

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
