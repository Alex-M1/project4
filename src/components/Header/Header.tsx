import React, { useMemo } from 'react';
import { Location } from 'history';
import { url } from 'constants/urls';
import { StHeader, StLogo, StHeaderContainer, StNavContainer } from './styled';
import HeaderTheme from './HeaderTheme';
import HeaderLanguage from './HeaderLanguage';
import HeaderRoute from './HeaderRoute';
import HeaderLogout from './HeaderLogout';

interface IProps {
    location: Location
}

const Header: React.FC <IProps> = ({ location }) => {
    const isNav = useMemo(() => {
        const path = location.pathname;
        if (path === url.authClient || path === url.regClient) {
            return null;
        }
        return <HeaderRoute/>;
    }, [location.pathname]);

    return (
        <StHeader>
            <StHeaderContainer>
                <StNavContainer>
                    <StLogo
                        src="src/assets/img/logo.png"
                        alt="logo"
                    />
                </StNavContainer>
            </StHeaderContainer>
            <StHeaderContainer>
                {isNav}
            </StHeaderContainer>
            <StHeaderContainer>
                <StNavContainer>
                    <HeaderTheme/>
                    <HeaderLanguage/>
                    <HeaderLogout/>
                </StNavContainer>
            </StHeaderContainer>
        </StHeader>
    );
};

export default Header;
