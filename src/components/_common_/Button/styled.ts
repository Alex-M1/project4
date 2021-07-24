import styled from 'styled-components';
import { changeTheme } from 'src/helpers/changeTheme';
import { IStyled } from '../types/styledTypes';

export const StButton = styled.button <IStyled>`
  width: 100%;
  height: 40px;
  margin: 20px 0;
  background: ${(props) => changeTheme(props, 'button')};
  color: ${(props) => changeTheme(props, 'buttonColor')};
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: ${(props) => changeTheme(props, 'buttonHover')};
  }
`;
