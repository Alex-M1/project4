import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StContainer = styled.div <IStyled>`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${(props) => changeTheme(props, 'white')};
`;
