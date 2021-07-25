import React, {useEffect, useMemo, useState} from 'react';
import { IPlayWithBot, IPlayWithOpponent } from 'store/ticTac/types';
import { v4 as uuidv4 } from 'uuid';
import { GAME_SETTINGS, LOCAL_STORAGE as LS } from 'constants/constants';
import { useTranslation } from 'react-i18next';
import { IMatch } from '../_common_/types/constantsTypes';
import { StTicTacContainer, StTicTacField, StTurnText } from './styled';
import TicTacItem from './TicTacItem';

interface IProps {
  match: IMatch,
  squares: string[],
  isGameEnd: boolean,
  createRoomChanel: (payload: any) => void,
  stepWithBot: (payload: IPlayWithBot) => void,
  stepWithOpponent: (payload: IPlayWithOpponent) => void,
  setTurn: (payload: boolean) => void,
  myOpponentGame: any;
  isMyTurn: boolean;
}

const TicTac: React.FC<IProps> = ({
  match,
  squares,
  isGameEnd,
  stepWithBot,
  stepWithOpponent,
  isMyTurn,
  createRoomChanel,
  myOpponentGame,
}) => {
  const [turn, setTurn] = useState(isMyTurn);
  const data = JSON.parse(localStorage.getItem(LS.gameOptions));
  useEffect(() => {
    setTurn(true);
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
  return (
    <StTicTacContainer>
      {
        data && data.playWith === GAME_SETTINGS.user && (
          <StTurnText>{ turn ? t('your_turn') : t('opponent_turn') }</StTurnText>
        )
      }
      <StTicTacField >
        {renderSquares}
      </StTicTacField>
    </StTicTacContainer>
  );
};

export default TicTac;
