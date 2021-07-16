import { colors } from 'constants/colors';

export interface IStyled {
  theme: 'dark' | 'light';
  colors: typeof colors;
}
