import React from 'react';

import Button from 'common/Button';
import { IAuthBtn } from './types';
import { StInputDiv } from '../AuthIpt/styled';

const AuthBtn = ({ signInRequest }: IAuthBtn) => {
    const onButtonClick = () => signInRequest();
    return (
        <StInputDiv>
            <Button
                text="signInBtn"
                onClick={onButtonClick}
            />
        </StInputDiv>
    );
};

export default AuthBtn;
