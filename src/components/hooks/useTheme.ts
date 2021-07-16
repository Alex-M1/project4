import { useContext } from 'react';

import { colors } from 'constants/colors';
import { Theme } from '../hocs';

export const useTheme = () => ({
  colors,
  ...useContext(Theme),
});
