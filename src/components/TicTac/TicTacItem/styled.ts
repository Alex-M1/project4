import { IStyled } from 'common/types/styledTypes';
import styled from 'styled-components';

export const StTicTacItem = styled.div < IStyled > `
  border: 1px solid ${({ theme, colors }: IStyled) => colors[theme].ticTacColor};
  color: ${({ theme, colors }: IStyled) => colors[theme].ticTacColor};
  width: 33.333%;
  height: 33.333%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  cursor: pointer;
  user-select: none;
`;
