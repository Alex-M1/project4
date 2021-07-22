import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: 0;
`;
export const StP = styled.p <IStyled>`
  color: ${(props) => changeTheme(props, 'textColorHeader')};
  font-size: 25px;
  letter-spacing: 2px;
  cursor: pointer;
`;
