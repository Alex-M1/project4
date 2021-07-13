import React from 'react';

import { StHeader, StLogo } from './styled';

const Header = () => {
    return (
        <StHeader>
            <StLogo src="src/assets/img/logo.png" alt="logo"/>
        </StHeader>
    );
};

export default Header;
