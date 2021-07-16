import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StBtn = styled.button <IStyled>`
    position: absolute;
    top: 30px;
    right: 35px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 4px #000;
    border: none;
    background: ${({ colors, theme }) => colors[theme].button};
    &:hover {
        box-shadow: 0 0 5px ${({ colors, theme }) => colors[theme].AddRoomBtn};;
    }
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 3px;
        background: ${({ colors, theme }) => colors[theme].AddRoomBtn};;
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3px;
        height: 15px;
        background: ${({ colors, theme }) => colors[theme].AddRoomBtn};;
    }
`;
