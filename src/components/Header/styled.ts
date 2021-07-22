import { changeTheme } from 'src/helpers/changeTheme';
import styled from 'styled-components';
import { IStyled } from '../_common_/types/styledTypes';

export const StHeader = styled.div<IStyled>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 90px;
    background: ${(props) => changeTheme(props, 'headerBg')}
`;
export const StLogo = styled.img <IStyled>`
  display: block;
  cursor: pointer;
  filter: drop-shadow(0 0 2px ${(props) => changeTheme(props, 'headerBg')});
`;
export const StHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StNavContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
