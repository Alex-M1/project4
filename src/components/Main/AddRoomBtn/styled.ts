import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StBtn = styled.button <IStyled>`
    position: absolute;
    top: 30px;
    right: 35px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 4px ${(props) => changeTheme(props, 'black')};
    border: none;
    background: ${(props) => changeTheme(props, 'button')};
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px ${(props) => changeTheme(props, 'AddRoomBtn')};
    }
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 15px;
        height: 3px;
        background: ${(props) => changeTheme(props, 'AddRoomBtn')};
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3px;
        height: 15px;
        background: ${(props) => changeTheme(props, 'AddRoomBtn')};
    }
`;
