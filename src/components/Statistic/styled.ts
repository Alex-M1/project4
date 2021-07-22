import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StContainer = styled.div <IStyled>`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ colors, theme }) => colors[theme].white};
`;
