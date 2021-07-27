import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import Title from 'common/Title';
import { Redirect, useHistory } from 'react-router-dom';
import { IMyOpponentGame, IRoom } from 'store/room/types';
import { CLIENT } from 'constants/urls';
import { IGameData } from 'common/types/constantsTypes';
import { GAME_SETTINGS, LOCAL_STORAGE as LS } from 'constants/constants';
import MainRoomsItem from '../MainRoomsItem';
import { StP, StRooms, StRoomsContainer } from './styled';
import AddRoomBtn from '../AddRoomBtn';

interface IProps {
    rooms: IRoom[],
    toRoom: string,
    myOpponentGame: IMyOpponentGame,
    redirectToRoom: (payload: string) => void,
    socketConnection: () => void,
}

const MainRoomsList: React.FC<IProps> = ({
    rooms,
    toRoom,
    myOpponentGame,
    redirectToRoom,
    socketConnection,
}) => {
    const history = useHistory();
    useEffect(() => {
        socketConnection();
    }, []);
    useEffect(() => {
        if (myOpponentGame.id) {
            history.push(`${CLIENT.ticTacClient}`);
            const gameData: IGameData = {
                roomId: myOpponentGame.id,
                gameType: myOpponentGame.gameType,
                playWith: GAME_SETTINGS.user,
            };
            localStorage.setItem(LS.gameOptions, JSON.stringify(gameData));
        }
    }, [myOpponentGame]);
    const isRedirect = useMemo(() => {
        if (toRoom) {
            redirectToRoom('');
            return <Redirect to={`/${toRoom}`} />;
        }
        return null;
    }, [toRoom]);
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    return (
        <StRooms
            theme={theme}
            colors={colors}
        >
            <Title title="list_of_rooms" />
            <AddRoomBtn />
            <StRoomsContainer>
                {rooms.length
                    ? rooms.map((room) => (
                        <MainRoomsItem
                            id={room.id}
                            key={room.id}
                            login={room.creatorLogin}
                            type={room.gameType}
                        />
                    ))
                    : <StP>{t('no_rooms')}</StP>}
            </StRoomsContainer>
            {isRedirect}
        </StRooms>
    );
};

export default MainRoomsList;
