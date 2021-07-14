import React from 'react';

import { useTheme } from '../hooks/useTheme';
import Title from '../_common_/Title';
import AuthIpt from './AuthIpt';
import AuthBtn from './AuthBtn';
import { StGlobalCredentials, StContainer } from './styled';
import AuthNav from './AuthNav';

const Auth = () => {
    const { colors, theme } = useTheme();
    return (
        <>
            <StGlobalCredentials>
                <StContainer
                    theme={theme}
                    colors={colors}
                >
                    <Title title="sign_in_title" />
                    <AuthIpt type="login" />
                    <AuthIpt type="password" />
                    <AuthBtn />
                    <AuthNav />
                </StContainer>
            </StGlobalCredentials>
        </>
    );
};

export default Auth;
