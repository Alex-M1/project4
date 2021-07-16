import React from 'react';
import Portal from '../../Portal';
import { StModal, StModalContainer } from './styled';

const CustomModal = ({handleCloseModal, header, content}) => {
    return(
        <Portal>
            <StModal>
                <StModalContainer>
                    <button onClick={handleCloseModal}></button>
                    <div>{header}</div>
                    {content}
                </StModalContainer>
            </StModal>
        </Portal>
    )
}
export default CustomModal;
