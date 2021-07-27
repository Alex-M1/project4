import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 0;
    position: relative;
`;

export const StSpan = styled.span <IStyled>`
    padding: 5px;
    font-size: 17px;
    color: ${(props) => changeTheme(props, 'textColor')};
    cursor: default;
`;
