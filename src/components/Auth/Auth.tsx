import React from 'react';

import Title from '../_common_/Title';
import AuthIpt from './AuthIpt';
import AuthBtn from './AuthBtn';
import { StGlobalCredentials, StContainer } from './styled';
import AuthLink from './AuthLink';

const Auth = () => {
    return (
        <>
            <StGlobalCredentials>
                <StContainer>
                    <Title title="signInTitle" />
                    <AuthIpt type="login" />
                    <AuthIpt type="password" />
                    <AuthBtn />
                    <AuthLink />
                </StContainer>
            </StGlobalCredentials>
        </>
    );
};

export default Auth;
