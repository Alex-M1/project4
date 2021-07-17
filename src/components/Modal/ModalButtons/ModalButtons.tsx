import React from 'react';
import { StButton } from 'common/Button/styled';
import { useTranslation } from 'react-i18next';
import { IRoom } from 'store/room/types';
import { useTheme } from '../../hooks/useTheme';
import { StButtonGroup } from '../styled';

interface IProps {
    tex: string;
    text: string;
    gameType: string;
    createRoom: (payload: IRoom) => void;
    user: any;
    handleCloseModal: () => void;
    handleCreateRoom: () => void;
} 

const ModalButtons: React.FC <IProps> = ({ 
        tex, 
        text, 
        gameType,
        createRoom,
        user,
        handleCloseModal, 
        handleCreateRoom, 
    }: IProps) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    handleCreateRoom = () => {
        const obj: IRoom = {
            id: Math.random() * 1000,
            loginName: user.login,
            gameType,
        };
        createRoom(obj);
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
