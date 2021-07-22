import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

export const StThemeToggle = styled.button <IStyled>`
  position: relative;
  top: 0px;
  right: 0px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${(props) => changeTheme(props, 'iconTheme')};
  cursor: pointer;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: ${(props) => changeTheme(props, 'iconThemeMoon')};
  }
  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${(props) => changeTheme(props, 'iconThemeSun')};
  box-shadow: 0 0 20px ${(props) => changeTheme(props, 'iconThemeSun')};
  } 

  &:hover {
  filter: drop-shadow(0 0 2px ${(props) => changeTheme(props, 'hoverLight')});
  }
`;
