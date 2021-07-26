import { IStyled } from 'common/types/styledTypes';
import { VIEW_OPTIONS } from 'constants/constants';
import { ICheckerModel } from 'store/checkers/types';

export const changeTheme = (props: IStyled, value: string) => props.colors[props.theme][value];
export const setCellBg = (possibleCell: boolean, fieldItem: ICheckerModel) => {
  const cellBg = VIEW_OPTIONS.CELL_BACKGROUND;
  if (possibleCell) return cellBg.POSSIBLE;
  return fieldItem.blackSquare ? cellBg.GRAY : cellBg.WHITE;
};
