import React from 'react';
import { CELL } from 'constants/component';
import { useTheme } from '../hooks/useTheme';
import { StCell, StContainer, StTable } from './styled';

const Checkers = () => {
  const { colors, theme } = useTheme();

  return (
      <StContainer>
        <StTable
            colors={colors}
            theme={theme}
        >
          {CELL.map((cell) => (
              <StCell
                  key={cell.id}
                  colors={colors}
                  theme={theme}
              >
                <div draggable/>
                {/*{cell.id}*/}
              </StCell>
          ))}
        </StTable>
      </StContainer>
  );
};
export default Checkers;
