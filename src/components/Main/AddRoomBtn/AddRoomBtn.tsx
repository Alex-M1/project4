import React, { useState } from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import Modal from 'src/components/Modal';
import { StBtn } from './styled';

const AddRoomBtn: React.FC = () => {
    const { colors, theme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => setIsOpen((prev) => !prev);

    return (
        <>
            <StBtn
                theme={theme}
                colors={colors}
                onClick={handleClick}
            />
            {isOpen && <Modal header="Choose the game" handleCloseModal={handleClick} />}
        </>
    );
};

export default AddRoomBtn;
