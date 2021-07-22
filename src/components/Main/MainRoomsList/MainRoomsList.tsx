import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import Title from 'common/Title';
import { IRoom } from 'store/room/types';
import { StP, StRooms, StRoomsContainer } from './styled';
import MainRoomsItem from '../MainRoomsItem';
import AddRoomBtn from '../AddRoomBtn';

interface IProps {
    rooms: IRoom[],
    socketConnection: () => void
}

const MainRoomsList: React.FC<IProps> = ({ rooms, socketConnection }) => {
    useEffect(() => {
        socketConnection();
    }, []);
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
                            key={room.id}
                            login={room.creatorLogin}
                            type={room.gameType}
                        />
                    ))
                    : <StP>{t('no_rooms')}</StP>}
            </StRoomsContainer>
        </StRooms>
    );
};

export default MainRoomsList;
