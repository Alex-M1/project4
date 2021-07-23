import styled from 'styled-components';
import { changeTheme } from 'src/helpers/changeTheme';
import { IStyled } from '../types/styledTypes';

export const StTitle = styled.h1 <IStyled>`
   width: 100%;
   padding-top: 35px;
   text-align: center;
   color: ${(props) => changeTheme(props, 'textColor')};
   font-size: 25px;
   cursor: default;
`;
