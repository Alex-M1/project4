import { LOCAL_STORAGE } from 'constants/constants';
import React from 'react';
import { IGameData } from '../_common_/types/constantsTypes';

export const withGame = (Component: React.ComponentType<any>) => (props: any) => {
  const gameOptions:IGameData = JSON.parse(localStorage.getItem(LOCAL_STORAGE.gameOptions));
  return <Component {...props} gameWith={gameOptions.playWith} />;
};
