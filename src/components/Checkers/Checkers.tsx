import React from 'react';
import { CELL } from 'constants/component';
import { DndProvider, useDrag, useDrop } from 'react-dnd'; 
import { HTML5Backend } from 'react-dnd-html5-backend'; 
import { useTheme } from '../hooks/useTheme';
import { StCell, StCellBlack, StCellWhite, StContainer, StTable } from './styled';

const Checker = ({ isBlack, colors, theme }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'checker',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? '0.3' : '1' }}>
        {
          isBlack 
          ? <StCellBlack colors={colors} theme={theme}/> 
          : <StCellWhite colors={colors} theme={theme}/>
        }
    </div>
  );
};

const Cell = ({ colors, theme, col, row, cell }) => {
  const [, drop] = useDrop(
    () => ({
      accept: 'checker',
      drop: () => {
        console.log(`drop ${row} ${col}`);
      },
    }),
    [row, col],
  );

  const getCellBackground = (row, col) => {
    return row % 2 === 1 
      ? (col % 2 === 1 ? '#ccc' : '#fff') 
      : (col % 2 === 0 ? '#ccc' : '#fff');
  };

  return (
    <StCell
      theme={theme}
      colors={colors}
      background={getCellBackground(row, col)}
      ref={drop}
    >
      {
        (cell.hasItem)
        ? (cell.color === 'black')
          ? <Checker isBlack colors={colors} theme={theme}/>
          : <Checker isBlack={false} colors={colors} theme={theme}/>
        : null
      }
    </StCell>
  );
};

const Checkers = () => {
  const { colors, theme } = useTheme();
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];

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
                    key={`row_${row}_col_${col}`}
                    theme={theme}
                    colors={colors}
                    row={row}
                    col={col}
                    cell={cell}
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
