import { createGlobalStyle } from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StGlobalStyle = createGlobalStyle < IStyled > `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    height: ${window.innerHeight}px;
    overflow: hidden;
    background: ${({ colors, theme }) => colors[theme].background};
  }
  #root{
    height: 100%;
  }
  a{
    text-decoration: none;
  }
`;
