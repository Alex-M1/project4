import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StSelect = styled.select <IStyled>`
    width: 290px;
    height: 40px;
    padding: 5px;
    margin: 30px 0 20px;
    background: ${({ colors, theme }) => colors[theme].selectBackground};
    border-radius: 12px;
    text-align: center;
    font-size: 18px;
`;
