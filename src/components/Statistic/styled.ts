import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StContainer = styled.div <IStyled>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90%;
  border: 1px solid red;
  background: violet;
`;
export const StWrapper = styled.div`
  width: 40%;
  height: 95%;
  border: 1px solid red;
  background: green;
`;
