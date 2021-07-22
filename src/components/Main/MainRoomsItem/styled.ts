import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StItem = styled.div <IStyled>`
    display: grid;
    grid-template-columns: 75% 15% 10%;
    align-content: center;
    align-items: center;
    width: 90%;
    height: 45px;
    margin: 10px auto;
    padding: 0 20px;
    border-radius: 12px;
    background: ${({ colors, theme }) => colors[theme].backgroundItem};
    color: ${({ colors, theme }) => colors[theme].textColor};
    cursor: pointer;
`;
