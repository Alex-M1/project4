import styled from 'styled-components';

const size = 480;

export const StTicTacContainer = styled.div`
  display: flex;
  height: ${window.innerHeight - 90}px;
  justify-content : center;
  align-items: center;
`;

export const StTicTacField = styled.div`
  width: ${size}px;
  height: ${size}px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;
