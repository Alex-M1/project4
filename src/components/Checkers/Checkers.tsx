import React from 'react';
import { CELL } from 'constants/component';
import { useTheme } from '../hooks/useTheme';
import { StCell, StCellBlack, StCellWhite, StContainer, StTable } from './styled';

const Checkers = () => {
  const { colors, theme } = useTheme();

  return (
      <StContainer>
        <StTable
            theme={theme}
            colors={colors}
        >
          {CELL.map((cell) => (
              <StCell
                  key={cell.id}
                  theme={theme}
                  colors={colors}
              >
                  {
                      (cell.hasItem)
                        ?
                          (cell.color === 'black')
                          ? <StCellBlack colors={colors} theme={theme} draggable/>
                          : <StCellWhite colors={colors} theme={theme} draggable/>
                        : null
                  }
              </StCell>
          ))}
        </StTable>
      </StContainer>
  );
};
export default Checkers;
