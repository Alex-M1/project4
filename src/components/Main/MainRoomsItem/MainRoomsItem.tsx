import React from 'react';
import { CLIENT } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { LOCAL_STORAGE } from 'constants/constants';
import { NavLink } from 'react-router-dom';
import { StItem } from './styled';

import ItemIcons from './ItemIcons';

interface IProps {
  id: string,
  type: string;
  login: string;
}

const MainRoomsItem: React.FC<IProps> = ({ id, login, type }) => {
  const { colors, theme } = useTheme();
  const isMyGame = login === localStorage.getItem(LOCAL_STORAGE.login);
  return (
    <NavLink to='/main'>
      <StItem
        theme={theme}
        colors={colors}
      >
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
