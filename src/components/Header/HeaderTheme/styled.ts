import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StThemeToggle = styled.button < IStyled > `
  position: absolute;
  top: 25px;
  right: 10%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${({ colors, theme }) => colors[theme].iconTheme};
  overflow: none;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: ${({ colors, theme }) => colors[theme].iconThemeMoon};
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: ${({ colors, theme }) => colors[theme].iconThemeSun};
    box-shadow: 0 0 20px ${({ colors, theme }) => colors[theme].iconThemeSun};
  }
`;
