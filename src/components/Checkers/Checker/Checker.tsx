// import { CHECKER_FIELD_INIT } from 'constants/constants';
import React from 'react';
import { useDrag } from 'react-dnd';
import { useTheme } from 'src/components/hooks/useTheme';
import { StCellBlack, StCellWhite, StOpacity } from './styled';

interface IProps {
  isBlack?: boolean,
}

const Checker: React.FC<IProps> = ({ isBlack }) => {
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
        // if (isBlack) {
        //   if (CHECKER_FIELD_INIT)
        // }
        isBlack
          ? <StCellBlack colors={colors} theme={theme} />
          : <StCellWhite colors={colors} theme={theme} />
      }
    </StOpacity>
  );
};
export default Checker;
