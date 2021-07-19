import styled from 'styled-components';

export const StDoor = styled.img`
  display: block;
  width: 23px;
  height: 23px;
  position: absolute;
  top: 32px;
  right: 2%;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 2px #ddd);
  }
`;
