import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';

export const StRooms = styled.div <IStyled>`
    width: 500px;
    height: 89%;
    padding: 0 10px 10px;
    position: relative;
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
    color: ${({ colors, theme }) => colors[theme].textColor};
    border-radius: 12px;
    overflow: hidden;
`;
export const StRoomsContainer = styled.div`
    width: 100%;
    height: 87%;
    padding: 10px;
    margin: 20px 0 10px;
    overflow-y: scroll;
     &::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(155, 155, 158, 0.15);
    border-radius: 5px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(201, 201, 201, 0.5);
    border-radius: 5px;
  }
`;
export const StP = styled.p`
    position: relative;
    top: 40%;
    width: 100%;
    text-align: center;
    font-size: 18px;
`;
