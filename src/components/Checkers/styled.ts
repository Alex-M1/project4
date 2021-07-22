import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StContainer = styled.div`
  width: 100vw;
`;
export const StTable = styled.div <IStyled>`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  overflow: hidden;
  width: 660px;
  height: 660px;
  border: 2px solid ${(props) => changeTheme(props, 'textColor')};
  margin: 45px auto;
  background: ${(props) => changeTheme(props, 'backgroundSecondary')};
  transform: rotate(180deg);
`;
