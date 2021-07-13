import React from 'react';

import { IAuthBtn } from './types';
import Button from 'common/Button';
import { StInputDiv } from '../AuthIpt/styled';

const AuthBtn = ({ signInRequest }: IAuthBtn) => {
    const onButtonClick = () => signInRequest();
    return (
        <StInputDiv>
        <Button
            text="Sign in"
            onClick={onButtonClick}
            />
        </StInputDiv>
    )
}

export default AuthBtn;