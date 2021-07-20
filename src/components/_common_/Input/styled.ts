import styled from 'styled-components';
import { IStyled } from '../types/styledTypes';

export const StInput = styled.input <IStyled>`
    width: 290px;
    height: 45px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 10px;
    color: ${({ colors, theme }) => colors[theme].textColor};
    background: ${({ colors, theme }) => colors[theme].input};
    cursor: default;
    &::placeholder{
        color:${({ colors, theme }) => colors[theme].placeholderColor};
    }
`;
