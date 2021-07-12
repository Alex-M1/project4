import { colors } from 'constants/colors';
import { SyntheticEvent } from 'react';

export interface IStInput {
  colors: typeof colors;
  theme: 'dark' | 'light';
}
export interface IInput {
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}
