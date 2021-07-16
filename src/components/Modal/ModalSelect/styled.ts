import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StSelect = styled.select < IStyled > `
    width: 290px;
    height: 40px;
    padding: 10px;
    margin: 20px 0;
    background: ${({ colors, theme }) => colors[theme].selectBackground};
    border-radius: 12px;
`;
