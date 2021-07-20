import React, { useMemo } from 'react';
import { StTicTacContainer, StTicTacField } from './styled';
import TicTacItem from './TicTacItem';

interface IProps {
  squares: string[];
  doStep: (square: number) => void;
}

const TicTac: React.FC<IProps> = ({ squares, doStep }) => {
  const renderSquares = useMemo(() => {
    return squares.map((el, i) => (
      <TicTacItem
        square={i}
        content={el}
        onClick={doStep}
      />
    ));
  }, [squares]);
  return (
    <StTicTacContainer>
      <StTicTacField >
        {renderSquares}
      </StTicTacField>
    </StTicTacContainer>
  );
};

export default TicTac;
