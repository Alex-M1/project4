import React from 'react';

import { StInput } from './styled';

const Input = ({type, placeholder}) => {
    return(
        <StInput type={type} placeholder={placeholder}/>
    )
}

export default Input;