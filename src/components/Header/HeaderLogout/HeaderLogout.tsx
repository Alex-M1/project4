import React from 'react';
import { StDoor } from './styled';
import { url } from '../../../constants/urls';
import { NavLink } from 'react-router-dom';

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
