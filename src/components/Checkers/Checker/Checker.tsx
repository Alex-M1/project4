import React from 'react';
import { useDrag } from 'react-dnd';
import { useTheme } from 'src/components/hooks/useTheme';
import { StCellBlack, StCellWhite, StOpacity } from './styled';

interface IProps {
  isBlack?: boolean,
  isQueen?: boolean,
}

const Checker: React.FC<IProps> = ({ isBlack, isQueen }) => {
  const { colors, theme } = useTheme();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'checker',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <StOpacity ref={drag} isDragging={isDragging}>
      {
        isBlack
          ? <StCellBlack isQueen={isQueen} colors={colors} theme={theme} />
          : <StCellWhite isQueen={isQueen} colors={colors} theme={theme} />
      }
    </StOpacity>
  );
};
export default Checker;
