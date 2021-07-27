import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StButton } from 'common/Button/styled';
import { useTheme } from '../../hooks/useTheme';
import { StButtonGroup } from '../styled';
import { KEY_CODES } from 'constants/constants';

interface IProps {
  createRoom: () => void;
  onCloseModal: () => void;
}

const ModalButtons: React.FC<IProps> = ({ createRoom, onCloseModal }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const handleCreateRoom = () => {
    createRoom();
    onCloseModal();
  };
  const create = (e) => {
    if (e.key === KEY_CODES.ENTER) {
      handleCreateRoom();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', create);
    return () => window.removeEventListener('keydown', create);
  }, []);

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
    </StButtonGroup >
  );
};

export default ModalButtons;
