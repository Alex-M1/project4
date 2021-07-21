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
    createRoom: () => void;
    user: any;
    handleCloseModal: () => void;
    handleCreateRoom: () => void;
}

const ModalButtons: React.FC<IProps> = ({
    createRoom,
    handleCloseModal,
    handleCreateRoom,
}: IProps) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    handleCreateRoom = () => {
        createRoom();
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
                {t('create_btn')}
            </StButton>
            <StButton
                theme={theme}
                colors={colors}
                onClick={handleCloseModal}
            >
                {t('cancel_btn')}
            </StButton>
        </StButtonGroup>
    );
};

export default ModalButtons;
