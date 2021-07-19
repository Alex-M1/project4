import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StThemeToggle = styled.button <IStyled>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${({ colors, theme }) => colors[theme].iconTheme};
  overflow: none;
  cursor: pointer;
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

  &:hover {
    filter: drop-shadow(0 0 2px #ddd);
  }
`;
