import React, { useEffect } from 'react';
import Title from 'common/Title';
import ModalButtons from './ModalButtons';
import Portal from '../Portal';
import { StModal, StModalContainer } from './styled';
import { useTheme } from '../hooks/useTheme';
import ModalCross from './ModalCross';
import ModalSelect from './ModalSelect';

interface IProps {
  onCloseModal: () => void;
}

const Modal: React.FC<IProps> = ({ onCloseModal }) => {
  const { colors, theme } = useTheme();
  const close = (e) => {
    if (e.keyCode === 27) {
      onCloseModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', close);
   return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <Portal>
      <StModal
        theme={theme}
        colors={colors}
      >
        <StModalContainer
          theme={theme}
          colors={colors}
        >
          <ModalCross onCloseModal={onCloseModal} />
          <Title title="choose_the_game" />
          <ModalSelect />
          <ModalButtons onCloseModal={onCloseModal} />
        </StModalContainer>
      </StModal>

    </Portal>
  );
};
export default Modal;
