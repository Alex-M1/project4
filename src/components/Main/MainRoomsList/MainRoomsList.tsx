import React, { useEffect } from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import Title from 'common/Title';
import { IRoom } from 'store/room/types';
import { StP, StRooms, StRoomsContainer } from './styled';
import MainRoomsItem from '../MainRoomsItem';
import AddRoomBtn from '../AddRoomBtn';

interface IProps {
    rooms: IRoom[],
    socketConnection :()=>void
}

const MainRoomsList: React.FC <IProps> = ({ rooms, socketConnection }) => {
    const { colors, theme } = useTheme();
    useEffect(() => {
        socketConnection();
    }, []);
    return (
        <StRooms
            theme={theme}
            colors={colors}
        >
            <Title title="list_of_rooms"/>
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
                    : <StP>No rooms</StP>}
            </StRoomsContainer>
        </StRooms>
    );
};

export default MainRoomsList;
