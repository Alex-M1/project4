import React, { useEffect, useMemo, useState } from 'react';
import { ICreateRoomChanel, IPlayWithBot, IPlayWithOpponent } from 'store/ticTac/types';
import { v4 as uuidv4 } from 'uuid';
import { GAME_SETTINGS, LOCAL_STORAGE as LS } from 'constants/constants';
import { useTranslation } from 'react-i18next';
import { IMyOpponentGame } from 'store/room/types';
import { IMatch } from 'common/types/constantsTypes';
import { StTicTacContainer, StTicTacField, StTurnText } from './styled';
import TicTacItem from './TicTacItem';
import { useTheme } from '../hooks/useTheme';

interface IProps {
  match: IMatch,
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
  match,
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
        roomId: match.params.id,
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
      stepWithOpponent({ square, id: match.params.id });
    } else {
      stepWithBot({ square, id: match.params.id });
    }
  };

  const renderSquares = useMemo(() => {
    return squares.map((el, i) => (
      <TicTacItem
        key={uuidv4()}
        square={i}
        content={el}
        onClick={(square) => stepHandler(square)}
        isGameEnd={isGameEnd}
      />
    ));
  }, [squares]);
  const message = useMemo(() => {
    if (winnerMessage) return t(winnerMessage);
    return turn ? t('your_turn') : t('opponent_turn'); 
  }, [winnerMessage, turn]);
  return (
    <StTicTacContainer>
      <StTurnText
        theme={theme}
        colors={colors}
      >
        {message}
      </StTurnText>
      <StTicTacField >
        {renderSquares}
      </StTicTacField>
    </StTicTacContainer>
  );
};

export default TicTac;
