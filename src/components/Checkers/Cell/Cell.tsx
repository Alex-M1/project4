import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { ICell } from 'src/components/_common_/types/constantsTypes';
import { VIEW_OPTIONS } from 'constants/constants';
import { ICheckerModel } from 'store/checkers/types';
import Checker from '../Checker';
import { StCell } from './styled';

export interface IProps {
  cell: ICell,
  fieldItem: ICheckerModel,
  cellNumber: number,
  chooseCell: (cell: number) => void
}

const Cell: React.FC<IProps> = ({ cellNumber, cell, fieldItem, chooseCell }) => {
  const { colors, theme } = useTheme();
  const cellBg = VIEW_OPTIONS.CELL_BACKGROUND;
  const cellHandler = () => chooseCell(cellNumber);
  return (
    <StCell
      theme={theme}
      colors={colors}
      background={fieldItem.blackSquare ? cellBg.GRAY : cellBg.WHITE}
      onClick={cellHandler}
    >
      {

        fieldItem.checker
          ? <Checker isBlack={fieldItem?.checker.blackChecker} />
          : null
      }
    </StCell >
  );
};

export default Cell;
