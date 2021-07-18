import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { StContainer, StTable, StTd } from './styled';

const Checkers = () => {
  const { colors, theme } = useTheme();
  return (
    <StContainer>
      <StTable
        colors={colors}
        theme={theme}
      >
        <tbody>
          <tr>
            <StTd>&nbsp;</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>8</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>7</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>6</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>5</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>4</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>3</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>2</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>1</StTd>
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
            <StTd />
          </tr>
          <tr>
            <StTd>&nbsp;</StTd>
            <StTd>a</StTd>
            <StTd>b</StTd>
            <StTd>c</StTd>
            <StTd>d</StTd>
            <StTd>e</StTd>
            <StTd>f</StTd>
            <StTd>g</StTd>
            <StTd>h</StTd>
            <StTd />
          </tr>
        </tbody>
      </StTable>
    </StContainer>
  );
};
export default Checkers;
