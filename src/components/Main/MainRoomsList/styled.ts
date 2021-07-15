import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StRooms = styled.div <IStyled>`
    width: 500px;
    height: 90%;
    padding: 10px;
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
    color: ${({ colors, theme }) => colors[theme].textColor};
    border-radius: 12px;
`
export const StRoomsContainer = styled.div`
    width: 100%;
    height: 88.5%;
    margin: 10px 0;
    overflow-y: scroll;
`