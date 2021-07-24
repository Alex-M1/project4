import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CHESS_DESK } from 'constants/constants';
import { useTheme } from '../hooks/useTheme';
import { StContainer, StTable } from './styled';
import Cell from './Cell';

interface IProps {
  connectCheckersChannel: () => void
}

const Checkers: React.FC<IProps> = ({ connectCheckersChannel }) => {
  useEffect(() => {
    connectCheckersChannel();
  }, []);
  const { colors, theme } = useTheme();
  const rows = CHESS_DESK.ROWS;
  const cols = CHESS_DESK.COLS;
  let cellNumber = 0;
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
    </DndProvider>
  );
};
export default Checkers;
