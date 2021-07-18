import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StContainer = styled.div`
  width: 100vw;
`;

export const StTable = styled.div < IStyled > `
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
export const StCell = styled.div < IStyled > `
  width: 80px;
  height: 80px;
  border: 1px solid ${({ colors, theme }) => colors[theme].textColor};
  margin: 1px;
  color: ${({ colors, theme }) => colors[theme].textColor};
  background: #ccc;
  transform: rotate(180deg);
  
  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(6),
  &:nth-child(8),
  &:nth-child(9),
  &:nth-child(11),
  &:nth-child(13),
  &:nth-child(15),
  &:nth-child(18),
  &:nth-child(20),
  &:nth-child(22),
  &:nth-child(24),
  &:nth-child(25),
  &:nth-child(27),
  &:nth-child(29),
  &:nth-child(31),
  &:nth-child(34),
  &:nth-child(36),
  &:nth-child(38),
  &:nth-child(40),
  &:nth-child(41),
  &:nth-child(43),
  &:nth-child(45),
  &:nth-child(47),
  &:nth-child(50),
  &:nth-child(52),
  &:nth-child(54),
  &:nth-child(56),
  &:nth-child(57),
  &:nth-child(59),
  &:nth-child(61),
  &:nth-child(63)
  {
    background: #fff;
    & div {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border: 2px solid #000;
      box-shadow: 0 0 2px 2px #000;
      border-radius: 50%;
      background: #fff;
      cursor: grab;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        border: 2px solid #000;
        border-radius: 50%;
        background: #fff;
      }
    }
  }
`;
export const StChecker = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid darkred;
  border-radius: 50%;
  background: red;
  cursor: grab;
`;
