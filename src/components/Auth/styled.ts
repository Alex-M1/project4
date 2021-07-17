import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StContainer = styled.div < IStyled > `    
    width: 440px;
    height: auto;
    min-height: 420px;
    padding: 0 70px 30px;
    border: none;
    border-radius: 12px;
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
`;

export const StGlobalCredentials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 90px);
`;
export const StNavLink = styled.div < IStyled > `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${({ colors, theme }) => colors[theme].textColor};
`;
