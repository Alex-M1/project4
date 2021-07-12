import { useContext } from 'react';
import { colors } from 'constants/colors';
import { Theme } from '../hoks';

export const useTheme = () => ({
  colors,
  ...useContext(Theme),
});
