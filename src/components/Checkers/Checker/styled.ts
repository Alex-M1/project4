import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';
import styled from 'styled-components';

interface IQueen extends IStyled {
  isQueen: boolean;
}

export const StCellWhite = styled.div <IQueen>`
  border: 2px solid ${(props) => changeTheme(props, 'black')};
  box-shadow: 0 0 2px 2px ${(props) => changeTheme(props, 'black')};
  background: ${(props) => changeTheme(props, 'white')};
  &::after {
    border: 2px solid ${(props) => changeTheme(props, 'black')};
    background: ${(props) => (props.isQueen ? changeTheme(props, 'gold') : changeTheme(props, 'white'))};
  }
`;
export const StCellBlack = styled.div <IQueen>`
  border: 2px solid ${(props) => changeTheme(props, 'black')};
  box-shadow: 0 0 2px 2px ${(props) => changeTheme(props, 'black')};
  background: ${(props) => (props.isQueen ? changeTheme(props, 'gold') : changeTheme(props, 'blackCellBg'))};
  &::after {
    border: 2px solid ${(props) => changeTheme(props, 'black')};
    background: ${(props) => changeTheme(props, 'blackCellBg')};
  }
`;
