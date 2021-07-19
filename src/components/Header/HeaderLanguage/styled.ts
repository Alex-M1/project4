import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StLangToggle = styled.button < IStyled > `
  position: absolute;
  top: 29px;
  right: 5%;
  background: transparent;
  color: #fff;
  border: none;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 2px #ddd);
  }
`;
