import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import Title from 'common/Title';
import { IRoom } from 'store/room/types';
import { StRooms, StRoomsContainer } from './styled';
import MainRoomsItem from '../MainRoomsItem';
import AddRoomBtn from '../AddRoomBtn';

interface IProps {
    rooms: IRoom[],
}

const MainRoomsList: React.FC <IProps> = ({ rooms }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();

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
                            login={room.loginName} 
                            type={room.gameType}
                        />
                    ))  
                    : <p>{t('no_rooms')}</p>}
            </StRoomsContainer>
        </StRooms>
    );
};

export default MainRoomsList;
