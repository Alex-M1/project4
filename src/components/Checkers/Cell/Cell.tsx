import React from 'react';
import { useDrop } from 'react-dnd';
import { useTheme } from 'src/components/hooks/useTheme';
import { ICell } from 'src/components/_common_/types/constantsTypes';
import Checker from '../Checker';
import { StCell } from './styled';

interface IProps {
  col: number, 
  row: number, 
  cell: ICell
}

const Cell: React.FC <IProps> = ({ col, row, cell }) => {
  const { colors, theme } = useTheme();
  const [, drop] = useDrop(
    () => ({
      accept: 'checker',
      drop: () => {
        console.log(`drop ${row} ${col}`);
      },
    }),
    [row, col],
  );

  const getCellBackground = (row: number, col: number) => {
    return row % 2 === 1 
      ? (col % 2 === 1 ? '#ccc' : '#fff') 
      : (col % 2 === 0 ? '#ccc' : '#fff');
  };

  return (
    <StCell
      ref={drop}
      theme={theme}
      colors={colors}
      background={getCellBackground(row, col)}
    >
      {
        (cell.hasItem)
        ? (cell.color === 'black')
          ? <Checker isBlack />
          : <Checker isBlack={false} />
        : null
      }
    </StCell>
  );
};

export default Cell;
