import React, { useEffect } from 'react';
import { CHECKER_FIELD_INIT, CHESS_DESK } from 'constants/constants';
import { ICheckerModel } from 'store/checkers/types';
import { useTheme } from '../hooks/useTheme';
import { StContainer, StTable } from './styled';
import Cell from './Cell';

interface IProps {
  refreshField: (payload: Array<ICheckerModel>) => void,
  connectCheckersChannel: () => void,
}

const Checkers: React.FC<IProps> = ({ refreshField, connectCheckersChannel }) => {
  useEffect(() => {
    refreshField(CHECKER_FIELD_INIT);
    connectCheckersChannel();
  }, []);
  const { colors, theme } = useTheme();
  const rows = CHESS_DESK.ROWS;
  const cols = CHESS_DESK.COLS;
  let cellNumber = CHESS_DESK.CELLS_NUM_INIT;
  return (
    <StContainer>
      <StTable
        theme={theme}
        colors={colors}
      >
        {
          
          rows.map((row) => {
            return cols.map((col) => {
              cellNumber++;
              return (
                <Cell
                  key={`row_${row}_col_${col}`}
                  cellNumber={cellNumber}
                />
              );
            });
          })
        }
      </StTable>
    </StContainer>
  );
};
export default Checkers;
