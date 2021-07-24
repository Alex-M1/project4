import { changeTheme } from 'src/helpers/changeTheme';
import styled from 'styled-components';
import { IStyled } from '../types/styledTypes';

export const StInput = styled.input <IStyled>`
    width: 100%;
    height: 45px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 10px;
    color: ${(props) => changeTheme(props, 'textColor')};
    background: ${(props) => changeTheme(props, 'input')};
    cursor: default;
    &::placeholder{
        color: ${(props) => changeTheme(props, 'placeholderColor')};
    }
`;
