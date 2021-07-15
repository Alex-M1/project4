import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StBtn = styled.button <IStyled>`
    position: absolute;
    top: 30px;
    right: 35px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 2px #000;
    border: none;
    background: ${({ colors, theme }) => colors[theme].button};
    &:hover {
        box-shadow: 0 0 5px #fff;
    }
`
