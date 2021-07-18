import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
`;

export const StTable = styled.table < IStyled > `
  display: table;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;

  width: 444px;
  height: 444px;
  border: 2px solid red;
  margin: 140px auto;
  background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
`;
export const StTbody = styled.table`
  display: table-row-group;
  vertical-align: middle;
  /* border-color: inherit; */
  width: 400px;
  height: 400px;
  border: 1px solid #fff;
`;
export const StTd = styled.td`
  text-align: center;
  vertical-align: middle;
  width: 50px;
  border: 1px solid #fff;
  color: #fff;
  &::first-child{
    background: #fff;
  }
`;
