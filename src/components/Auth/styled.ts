import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StContainer = styled.div <IStyled>`    
    width: 440px;
    height: auto;
    min-height: 420px;
    padding: 0 70px 30px;
    border: none;
    border-radius: 12px;
    background: ${(props) => changeTheme(props, 'backgroundSecondary')};
`;
export const StGlobalCredentials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 90px);
`;
export const StNavLink = styled.div <IStyled>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${(props) => changeTheme(props, 'textColor')};
`;
export const StP = styled.p <IStyled>`
    color: ${(props) => changeTheme(props, 'textColor')}; 
    &:hover {
        text-decoration: underline;
    }
`; 
