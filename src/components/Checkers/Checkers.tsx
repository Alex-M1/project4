import React from 'react';
import { CELL } from 'constants/component';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CHESS_DESK } from 'constants/constants';
import { useTheme } from '../hooks/useTheme';
import { StContainer, StTable } from './styled';
import Cell from './Cell';

const Checkers: React.FC = () => {
  const { colors, theme } = useTheme();
  const rows = CHESS_DESK.ROWS;
  const cols = CHESS_DESK.COLS;

  return (
    <DndProvider backend={HTML5Backend}>
      <StContainer>
        <StTable
          theme={theme}
          colors={colors}
        >
          {
            rows.map((row) => {
              return cols.map((col) => {
                const cell = CELL[row - 1][col - 1];

                return (
                  <Cell
                    col={col}
                    key={`row_${row}_col_${col}`}
                    row={row}
                    cell={cell}
                    cellNumber={row * (col - 1) + col}
                  />
                );
              });
            })
          }
        </StTable>
      </StContainer>
    </DndProvider>
  );
};
export default Checkers;
