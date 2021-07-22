import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StLangToggle = styled.button <IStyled>`
  background: transparent;
  color: ${(props) => changeTheme(props, 'white')};
  border: none;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 2px ${(props) => changeTheme(props, 'hoverLight')});
  }
`;
