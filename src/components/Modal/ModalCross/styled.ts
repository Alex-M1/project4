import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StCrossBtn = styled.button < IStyled > `
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 3px ${({ colors, theme }) => colors[theme].AddRoomBtn};
    background: ${({ colors, theme }) => colors[theme].button};
    &:hover {
        box-shadow: inset 0 0 3px ${({ colors, theme }) => colors[theme].AddRoomBtnHover};
    }
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 12px;
        height: 2px;
        background: ${({ colors, theme }) => colors[theme].AddRoomBtn};
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 2px;
        height: 12px;
        background: ${({ colors, theme }) => colors[theme].AddRoomBtn};
    }
`;
