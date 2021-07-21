import React from 'react';
import { NavLink } from 'react-router-dom';
import { url } from 'constants/urls';
import { StDoor } from './styled';

const HeaderLogout = () => {
    return (
        <NavLink to={url.authClient}>
            <StDoor
                src={url.logo}
            />
        </NavLink>
    );
};
export default HeaderLogout;
