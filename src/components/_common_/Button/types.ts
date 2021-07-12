import { SyntheticEvent } from 'react';

export interface IButton {
  text: string;
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
}
