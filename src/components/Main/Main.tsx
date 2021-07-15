import React from 'react';

import { StGlobalCredentials } from '../Auth/styled';

import MainRoomsList from './MainRoomsList';

const Main = () => {
    return(
        <StGlobalCredentials>
            <MainRoomsList  />
        </StGlobalCredentials>
    )
}
export default Main;
