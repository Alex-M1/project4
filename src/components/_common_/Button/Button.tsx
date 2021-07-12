import React from 'react';

import { StButton } from './styled';

const Button = ({text}) => {
    return(
        <StButton type="button">
            {text}
        </StButton>
    )
}

export default Button;