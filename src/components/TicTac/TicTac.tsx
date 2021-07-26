import React, { useEffect, useMemo, useState } from 'react';
import { ICreateRoomChanel, IPlayWithBot, IPlayWithOpponent } from 'store/ticTac/types';
import { v4 as uuidv4 } from 'uuid';
import { GAME_SETTINGS, LOCAL_STORAGE as LS } from 'constants/constants';
import { useTranslation } from 'react-i18next';
import { IMyOpponentGame } from 'store/room/types';
import { StTicTacContainer, StTicTacField, StTurnText } from './styled';
import TicTacItem from './TicTacItem';
import { useTheme } from '../hooks/useTheme';

interface IProps {
  squares: string[],
  setTurn: (payload: boolean) => void,
  isMyTurn: boolean;
  setWinner: (payload: string) => void;
  isGameEnd: boolean,
  stepWithBot: (payload: IPlayWithBot) => void,
  winnerMessage: string;
  myOpponentGame: IMyOpponentGame;
  createRoomChanel: (payload: ICreateRoomChanel) => void,
  stepWithOpponent: (payload: IPlayWithOpponent) => void,
}

const TicTac: React.FC<IProps> = ({
  squares,
  isMyTurn,
  setWinner,
  isGameEnd,
  stepWithBot,
  winnerMessage,
  myOpponentGame,
  stepWithOpponent,
  createRoomChanel,
}) => {
  const [turn, setTurn] = useState(isMyTurn);
  const data = JSON.parse(localStorage.getItem(LS.gameOptions));
  useEffect(() => {
    setTurn(true);
    setWinner('');
  }, []);
  useEffect(() => {
    if (!myOpponentGame.id) {
      createRoomChanel({
        roomId: data.roomId,
        myOpponentGame,
      });
    }
  }, [myOpponentGame]);
  useEffect(() => {
    setTurn(isMyTurn);
  }, [isMyTurn]);
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const stepHandler = (square: number) => {
    if (data && data.playWith === GAME_SETTINGS.user) {
      stepWithOpponent({ square });
    } else {
      stepWithBot({ square });
    }
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
  const message = useMemo(() => {
    if (winnerMessage) return winnerMessage;
    return turn ? 'your_turn' : 'opponent_turn'; 
  }, [winnerMessage, turn]);
  return (
    <StTicTacContainer>
      <StTurnText
        theme={theme}
        colors={colors}
      >
        {t(message)}
      </StTurnText>
      <StTicTacField >
        {renderSquares}
      </StTicTacField>
    </StTicTacContainer>
  );
};

export default TicTac;
