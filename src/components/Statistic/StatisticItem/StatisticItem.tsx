/* eslint-disable no-plusplus */
import { LOCAL_STORAGE } from 'constants/constants';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

interface IProps {
  creatorLogin: string, 
  gameType: string, 
  guestLogin: string, 
  winnerLogin: string,
}

const StatisticItem: React.FC <IProps> = ({ creatorLogin, gameType, guestLogin, winnerLogin }) => {
  const { t } = useTranslation();
  const userLogin = localStorage.getItem(LOCAL_STORAGE.login);
  return (
      <div key={uuidv4()}>
        <span>{userLogin}</span>
        <span>{t(gameType)}</span>
        <span>{userLogin === creatorLogin ? guestLogin : creatorLogin}</span>
        <span>{winnerLogin}</span>
      </div>
  );
};

export default StatisticItem;
