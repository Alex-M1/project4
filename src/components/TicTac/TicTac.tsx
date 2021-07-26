import React, { useEffect, useMemo } from 'react';
import { IPlayWithBot } from 'store/ticTac/types';
import { v4 as uuidv4 } from 'uuid';
import { StTicTacContainer, StTicTacField } from './styled';
import TicTacItem from './TicTacItem';

interface IProps {
  squares: string[],
  isGameEnd: boolean,
  createRoomChanel: () => void,
  stepWithBot: (payload: IPlayWithBot) => void
}

const TicTac: React.FC<IProps> = ({
  squares,
  isGameEnd,
  stepWithBot,
  createRoomChanel,
}) => {
  useEffect(() => {
    createRoomChanel();
  }, []);
  const stepHandler = (square: number) => {
    stepWithBot({ square });
  };
  const renderSquares = useMemo(() => {
    return squares.map((el, i) => (
      <TicTacItem
        key={uuidv4()}
        square={i}
        content={el}
        onClick={stepHandler}
        isGameEnd={isGameEnd}
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
