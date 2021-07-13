import { SyntheticEvent } from 'react';

export interface IInput {
  type: string;
  value: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}
