/* eslint-disable no-plusplus */
import React from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  creatorLogin: string, 
  gameType: string, 
  guestLogin: string, 
  winnerLogin: string,
}

const StatisticItem: React.FC <IProps> = ({ creatorLogin, gameType, guestLogin, winnerLogin }) => {
  const { t } = useTranslation();
  let counter = 0;
  return (
      <div key={counter++}>
        <span>{creatorLogin}</span>
        <span>{t(gameType)}</span>
        <span>{guestLogin}</span>
        <span>{winnerLogin}</span>
      </div>
  );
};

export default StatisticItem;
