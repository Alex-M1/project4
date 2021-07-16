import React from 'react';
import Portal from '../Portal';
import { StModal, StModalContainer } from './styled';

interface IProps {
    handleCloseModal: () => void;
    header: string;
    content: string;
}

const Modal: React.FC <IProps> = ({ handleCloseModal, header, content }: IProps) => {
    return (
        <Portal>
            <StModal>
                <StModalContainer>
                    <button onClick={handleCloseModal} >x</button>
                    <div>{header}</div>
                    <div>{content}</div>
                    <button>confirm</button>
                    <button onClick={handleCloseModal}>cancel</button>
                </StModalContainer>
            </StModal>
        </Portal>
    );
};
export default Modal;
