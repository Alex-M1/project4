import React, { useEffect, useMemo } from 'react';
import { IPlayWithBot } from 'store/ticTac/types';
import { v4 as uuidv4 } from 'uuid';
import { IMatch } from '../_common_/types/constantsTypes';
import { StTicTacContainer, StTicTacField } from './styled';
import TicTacItem from './TicTacItem';

interface IProps {
  match: IMatch,
  squares: string[],
  gameWith: string,
  createRoomChanel: (id: string) => void,
  stepWithBot: (payload: IPlayWithBot) => void
}

const TicTac: React.FC<IProps> = ({ match, gameWith, squares, createRoomChanel, stepWithBot }) => {
  useEffect(() => {
    createRoomChanel(match.params.id);
  }, []);
  const stepHandler = (square: number) => {
    stepWithBot({ square, id: match.params.id });
  };
  const renderSquares = useMemo(() => {
    return squares.map((el, i) => (
      <TicTacItem
        key={uuidv4()}
        square={i}
        content={el}
        onClick={stepHandler}
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
