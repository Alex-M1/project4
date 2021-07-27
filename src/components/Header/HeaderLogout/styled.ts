import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';
import styled from 'styled-components';

export const StDoor = styled.img<IStyled>`
  display: block;
  width: 23px;
  height: 23px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 2px ${(props) => changeTheme(props, 'hoverLight')});
  }
`;
