import styled from 'styled-components';
import { IStyled } from '../types/styledTypes';

export const StButton = styled.button < IStyled > `
  width: 290px;
  height: 40px;
  margin: 20px 0;
  background: ${({ colors, theme }) => colors[theme].button};
  color: ${({ colors, theme }) => colors[theme].buttonColor};
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: ${({ colors, theme }) => colors[theme].buttonHover};
  }
`;
