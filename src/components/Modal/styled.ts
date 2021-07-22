import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StModal = styled.div <IStyled>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: ${(props) => changeTheme(props, 'backgroundModal')};
    z-index: 1;
`;

export const StModalContainer = styled.div <IStyled>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -47%);
    width: 400px;
    height: auto;
    padding: 0 55px 15px;
    background: ${(props) => changeTheme(props, 'backgroundModalContainer')};
    border-radius: 12px;
    box-shadow: 5px 5px 15px ${(props) => changeTheme(props, 'backgroundModalShadow')};

`;

export const StButtonGroup = styled.div <IStyled>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
