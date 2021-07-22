import React from 'react';
import ModalButtons from './ModalButtons';
import Portal from '../Portal';
import { StModal, StModalContainer } from './styled';
import { useTheme } from '../hooks/useTheme';
import Title from '../_common_/Title';
import ModalCross from './ModalCross';
import ModalSelect from './ModalSelect';

interface IProps {
  onCloseModal: () => void;
}

const Modal: React.FC <IProps> = ({ onCloseModal }) => {
  const { colors, theme } = useTheme();

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
          <ModalCross 
            onCloseModal={onCloseModal}
          />
          <Title title="choose_the_game" />
          <ModalSelect />
          <ModalButtons
            onCloseModal={onCloseModal}
          />
        </StModalContainer>
      </StModal>
      
    </Portal>
  );
};
export default Modal;
