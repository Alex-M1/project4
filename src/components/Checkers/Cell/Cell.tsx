import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { VIEW_OPTIONS } from 'constants/constants';
import { ICheckerModel } from 'store/checkers/types';
import Checker from '../Checker';
import { StCell } from './styled';

export interface IProps {
  fieldItem: ICheckerModel,
  cellNumber: number,
  possibleCell?: boolean,
  doStep: (cellNum: number) => void,
  chooseCell: (cell: number) => void,
}

const Cell: React.FC<IProps> = ({
  doStep,
  fieldItem,
  cellNumber,
  chooseCell,
  possibleCell,
}) => {
  const { colors, theme } = useTheme();
  const cellBg = VIEW_OPTIONS.CELL_BACKGROUND;
  const cellHandler = () => chooseCell(cellNumber);
  const possibleHandler = () => doStep(cellNumber);
  const setBg = () => {
    if (possibleCell) return cellBg.POSSIBLE;
    return fieldItem.blackSquare ? cellBg.GRAY : cellBg.WHITE;
  };
  return (
    <StCell
      theme={theme}
      colors={colors}
      background={setBg()}
      onClick={possibleCell ? possibleHandler : cellHandler}
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
