import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

interface IStCellStyled extends IStyled {
  background: string;
}

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
  border: 2px solid ${({ colors, theme }) => colors[theme].textColor};
  margin: 45px auto;
  background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
  transform: rotate(180deg);
`;
export const StCell = styled.div <IStCellStyled>`
  width: 80px;
  height: 80px;
  border: 1px solid ${({ colors, theme }) => colors[theme].textColor};
  margin: 1px;
  color: ${({ colors, theme }) => colors[theme].textColor};
  background: #ccc;
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
export const StCellWhite = styled.div <IStyled>`
  border: 2px solid #000;
  box-shadow: 0 0 2px 2px #000;
  background: #fff;
  &::after {
    border: 2px solid #000;
    background: #fff;
  }
`;
export const StCellBlack = styled.div <IStyled>`
  border: 2px solid #000;
  box-shadow: 0 0 2px 2px #000;
  background: #777;
  &::after {
    border: 2px solid #000;
    background: #777;
  }
`;
