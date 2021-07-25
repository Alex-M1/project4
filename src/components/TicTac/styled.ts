import { TIC_TAC, VIEW_OPTIONS } from 'constants/constants';
import styled from 'styled-components';

export const StTicTacContainer = styled.div`
  display: flex;
  height: ${window.innerHeight - VIEW_OPTIONS.HEADER_HEIGHT}px;
  flex-direction: column;
  justify-content : center;
  align-items: center;
`;

export const StTicTacField = styled.div`
  width: ${TIC_TAC.FIELD_SIZE}px;
  height: ${TIC_TAC.FIELD_SIZE}px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;

export const StTurnText = styled.div`
  margin: 0 0 15px;
  font-size: 30px;
  font-weight: 700;
`;
