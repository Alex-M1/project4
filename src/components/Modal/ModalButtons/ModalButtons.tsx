import React from 'react';
import { useTranslation } from 'react-i18next';
import { StButton } from 'common/Button/styled';
import { IRoom } from 'store/room/types';
import { useTheme } from '../../hooks/useTheme';
import { StButtonGroup } from '../styled';

interface IProps {
    user: string;
    gameType: string;
    addRoom: (payload: IRoom) => void;
    onCloseModal: () => void;
} 

const ModalButtons: React.FC <IProps> = ({ 
        user,
        addRoom,
        gameType,
        onCloseModal,
    }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    const handleCreateRoom = () => {
        const rooms: IRoom = {
            id: Math.random() * 1000,
            loginName: user,
            gameType,
        };
        addRoom(rooms);
        onCloseModal();
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
            {t('create_btn')}
        </StButton>
        <StButton 
            theme={theme}
            colors={colors}
            onClick={onCloseModal}
        >
            {t('cancel_btn')}
        </StButton>
        </StButtonGroup>  
    );
};
export default ModalButtons;
