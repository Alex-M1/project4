import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import { StCellBlack, StCellWhite } from './styled';

interface IProps {
  isBlack?: boolean,
  isQueen?: boolean,
}

const Checker: React.FC<IProps> = ({ isBlack, isQueen }) => {
  const { colors, theme } = useTheme();
  return (
    <div>
      {
        isBlack
          ? <StCellBlack isQueen={isQueen} colors={colors} theme={theme} />
          : <StCellWhite isQueen={isQueen} colors={colors} theme={theme} />
      }
    </div>
  );
};
export default Checker;
