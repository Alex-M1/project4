import React from 'react';
import { CLIENT } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { GAME_SETTINGS, LOCAL_STORAGE as LS } from 'constants/constants';
import { NavLink } from 'react-router-dom';
import { IGameData } from 'common/types/constantsTypes';
import { StItem } from './styled';
import ItemIcons from './ItemIcons';

interface IProps {
  id: string,
  type: string;
  login: string;
}

const MainRoomsItem: React.FC<IProps> = ({ id, login, type }) => {
  const { colors, theme } = useTheme();
  const isMyGame = login === localStorage.getItem(LS.login);
  const toGameHandler = () => {
    const gameData: IGameData = {
      roomId: id,
      gameType: type,
      playWith: isMyGame ? GAME_SETTINGS.bot : localStorage.getItem(LS.login),
    };
    localStorage.setItem(LS.gameOptions, JSON.stringify(gameData));
  };
  return (
    <NavLink to={type} onClick={toGameHandler}>
      <StItem theme={theme} colors={colors} >
        <p>{login}</p>
        {
          isMyGame
            ? <ItemIcons src={CLIENT.bot} alt={type} />
            : <ItemIcons src={CLIENT.play} alt={type} />
        }
        <ItemIcons src={`${CLIENT[type]}`} alt={type} />
      </StItem >
    </NavLink>

  );
};
export default MainRoomsItem;
