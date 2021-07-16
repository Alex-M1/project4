import React, { useState } from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import CustomModal from 'src/components/Modal/CustomModal';
import ModalCreateRoom from 'src/components/Modal/ModalCreateRoom';
import { StBtn } from './styled';

const AddRoomBtn = () => {

    const {colors, theme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(prev => !prev);

    return(
        <>
            <StBtn
                colors={colors}
                theme={theme}
            >
            </StBtn>
            {/* {isOpen && 
                <CustomModal 
                    header="Setup the game" 
                    content={
                    <ModalCreateRoom 
                        handleCloseModal={handleClick}
                    />
                    } 
                    handleCloseModal={handleClick}
                />
            } */}
        </>
    )
}

export default AddRoomBtn;