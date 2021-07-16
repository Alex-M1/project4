import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StModal = styled.div < IStyled > `
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: ${({ colors, theme }) => colors[theme].backgroundModal};
    z-index: 1;
`;

export const StModalContainer = styled.div < IStyled > `
    position: absolute;
    top: 50%;
    left: 47%;
    transform: translate(-50%, -47%);
    width: 400px;
    height: auto;
    padding: 0 55px 10px;
    background: ${({ colors, theme }) => colors[theme].backgroundModalContainer};
    border-radius: 12px;
    box-shadow: 5px 5px 15px ${({ colors, theme }) => colors[theme].backgroundModalShadow};;

`;

// export const StCrossBtn = styled.button < IStyled > `
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     border: none;
//     box-shadow: 0 0 3px ${({ colors, theme }) => colors[theme].AddRoomBtn};
//     background: ${({ colors, theme }) => colors[theme].button};
//     &:hover {
//         box-shadow: inset 0 0 3px ${({ colors, theme }) => colors[theme].AddRoomBtnHover};
//     }
//     &::before {
//         content: '';
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%) rotate(45deg);
//         width: 12px;
//         height: 2px;
//         background: ${({ colors, theme }) => colors[theme].AddRoomBtn};
//     }
//     &::after {
//         content: '';
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%) rotate(45deg);
//         width: 2px;
//         height: 12px;
//         background: ${({ colors, theme }) => colors[theme].AddRoomBtn};
//     }
// `;
// export const StSelect = styled.select < IStyled > `
//     width: 290px;
//     height: 40px;
//     padding: 10px;
//     margin: 20px 0;
//     background: ${({ colors, theme }) => colors[theme].selectBackground};
//     border-radius: 12px;
// `;
export const StButtonGroup = styled.div < IStyled > `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
