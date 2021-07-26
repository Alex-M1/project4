import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import Title from 'common/Title';
import { IRoom } from 'store/room/types';
import { Redirect } from 'react-router-dom';
import { LOCAL_STORAGE } from 'constants/constants';
import { StP, StRooms, StRoomsContainer } from './styled';
import MainRoomsItem from '../MainRoomsItem';
import AddRoomBtn from '../AddRoomBtn';

interface IProps {
    rooms: IRoom[],
    toRoom: string,
    socketConnection: () => void,
    redirectToRoom: (payload: string) => void
}

const MainRoomsList: React.FC<IProps> = ({ rooms, toRoom, socketConnection, redirectToRoom }) => {
    useEffect(() => {
        socketConnection();
    }, []);
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
