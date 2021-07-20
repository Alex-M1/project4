import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StRooms = styled.div < IStyled > `
    width: 500px;
    height: 89%;
    padding: 0 10px 10px;
    position: relative;
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
    color: ${({ colors, theme }) => colors[theme].textColor};
    border-radius: 12px;
`;
export const StRoomsContainer = styled.div`
    width: 100%;
    height: 87%;
    margin: 20px 0 10px;
    overflow-y: scroll;
`;
export const StP = styled.p`
    position: relative;
    top: 40%;
    width: 100%;
    text-align: center;
    font-size: 18px;
`;
