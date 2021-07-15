import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { StBtn } from './styled';

const AddRoom = () => {
    const {colors, theme} = useTheme();
    return(
        <StBtn
            colors={colors}
            theme={theme}
        >
            &#43;
        </StBtn>
    )
}

export default AddRoom;