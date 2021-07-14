import React, { useMemo } from 'react';
import ModRedirect from 'src/components/_common_/ModRedirect';
import Button from '../../_common_/Button';
import { IAuthBtn } from './types';
import { StInputDiv } from '../AuthIpt/styled';

const AuthBtn = ({ isRedirect, setIsRedirect, signInRequest }: IAuthBtn) => {
    const onButtonClick = () => signInRequest();
    const redirect = useMemo(() => {
        if (isRedirect) {
            setIsRedirect(false);
            return <ModRedirect to="/main" />;
        }
        return null;
    }, [isRedirect]);

    return (
        <>
            <StInputDiv>
                <Button
                    text="sign_in_btn"
                    onClick={onButtonClick}
                />
            </StInputDiv>
            {redirect}
        </>
    );
};

export default AuthBtn;
