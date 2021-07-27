import { VIEW_OPTIONS } from 'constants/constants';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';
import styled from 'styled-components';

interface IOpacity {
  isDragging: boolean
}

export const StCellWhite = styled.div <IStyled>`
  border: 2px solid ${(props) => changeTheme(props, 'black')};
  box-shadow: 0 0 2px 2px ${(props) => changeTheme(props, 'black')};
  background: ${(props) => changeTheme(props, 'white')};
  &::after {
    border: 2px solid ${(props) => changeTheme(props, 'black')};
    background: ${(props) => changeTheme(props, 'white')};
  }
`;
export const StCellBlack = styled.div <IStyled>`
  border: 2px solid ${(props) => changeTheme(props, 'black')};
  box-shadow: 0 0 2px 2px ${(props) => changeTheme(props, 'black')};
  background: ${(props) => changeTheme(props, 'blackCellBg')};
  &::after {
    border: 2px solid ${(props) => changeTheme(props, 'black')};
    background: ${(props) => changeTheme(props, 'blackCellBg')};
  }
`;
export const StOpacity = styled.div <IOpacity>`
  opacity: ${({ isDragging }) => (isDragging ? VIEW_OPTIONS.DRAGGIN_OPACITY.IS_DRAGGING : VIEW_OPTIONS.DRAGGIN_OPACITY.NOT_DRAGGING)};
`;
