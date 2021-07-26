import { IStyled } from 'src/components/_common_/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';
import styled from 'styled-components';

interface IStCellStyled extends IStyled {
  background: string;
}

export const StCell = styled.div <IStCellStyled>`
  width: 60px;
  height: 60px;
  border: 1px solid ${(props) => changeTheme(props, 'textColor')};
  margin: 1px;
  color: ${(props) => changeTheme(props, 'textColor')};
  background: ${(props) => changeTheme(props, 'gray')};
  transform: rotate(180deg);
  background: ${({ background }) => background};

  & div {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: grab;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
`;
