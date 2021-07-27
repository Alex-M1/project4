import React, { useRef, useState } from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import Modal from 'src/components/Modal';
import { StBtn } from './styled';

const AddRoomBtn: React.FC = () => {
    const { colors, theme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
        ref.current.blur();
    };
    const ref = useRef(null);

    return (
        <>
            <StBtn
                theme={theme}
                colors={colors}
                onClick={handleClick}
                ref={ref}
            />
            {isOpen && <Modal onCloseModal={handleClick} />}
        </>
    );
};

export default AddRoomBtn;
