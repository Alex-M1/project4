import styled from 'styled-components';
import { IStyled } from 'common/types/styledTypes';
import { changeTheme } from 'src/helpers/changeTheme';

interface IUnderline extends IStyled {
  path: string;
}

export const StWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: 0;
`;
export const StWrapperGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0;
`;
export const StP = styled.p <IStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => changeTheme(props, 'textColorHeader')};
  font-size: 25px;
  letter-spacing: 2px;
  cursor: pointer;
`;
export const StGames = styled.p <IUnderline>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => changeTheme(props, 'textColorHeader')};
  font-size: 25px;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: ${(props) => (props.path === '/main' ? 'underline' : 'none')};
`;
export const StStatistic = styled.p <IUnderline>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => changeTheme(props, 'textColorHeader')};
  font-size: 25px;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: ${(props) => (props.path === '/statistic' ? 'underline' : 'none')};
`;
