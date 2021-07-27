import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { ICheckerModel } from 'store/checkers/types';
import { setCellBg } from 'src/helpers/changeTheme';
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
  const cellHandler = () => chooseCell(cellNumber);
  const possibleHandler = () => doStep(cellNumber);

  return (
    <StCell
      theme={theme}
      colors={colors}
      background={setCellBg(possibleCell, fieldItem)}
      onClick={possibleCell ? possibleHandler : cellHandler}
    >
      {
        fieldItem.checker
          ? <Checker isBlack={fieldItem?.checker.blackChecker} isQueen={fieldItem?.checker.queen}/>
          : null
      }
    </StCell >
  );
};

export default Cell;
