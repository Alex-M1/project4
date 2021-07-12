import styled from 'styled-components';
import { IStInput } from './types';

export const StInput = styled.input < IStInput > `
    width: 290px;
    height: 45px;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    border: none;
    background: ${({ colors, theme }) => colors[theme].input};
    &::placeholder{
        color:${({ colors, theme }) => colors[theme].placeholderColor};
    }
`;
