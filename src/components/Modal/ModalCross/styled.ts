import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StCrossBtn = styled.button <IStyled>`
    position: absolute;
    top: 35px;
    right: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 3px ${(props) => changeTheme(props, 'AddRoomBtn')};
    background: ${(props) => changeTheme(props, 'button')};
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 3px ${(props) => changeTheme(props, 'AddRoomBtnHover')};
    }
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 12px;
        height: 2px;
        background: ${(props) => changeTheme(props, 'AddRoomBtn')};
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 2px;
        height: 12px;
        background: ${(props) => changeTheme(props, 'AddRoomBtn')};
    }
`;
