import React from 'react';
import { useTheme } from 'src/components/hooks/useTheme';
import Title from 'common/Title';
import { StRooms, StRoomsContainer } from './styled';
import MainRoomsItem from '../MainRoomsItem';
import AddRoom from '../AddRoom';

const MainRoomsList = () => {
    const { colors, theme } = useTheme();
    return(
        <StRooms
            theme={theme}
            colors={colors}
        >
            <Title title="list_of_rooms"/>
            <AddRoom />
            <StRoomsContainer>
                <MainRoomsItem value="newRoom" type="ticTacToe"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="newRoom" type="ticTacToe"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="newRoom" type="ticTacToe"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="newRoom" type="ticTacToe"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="newRoom" type="ticTacToe"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="newRoom" type="ticTacToe"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
                <MainRoomsItem value="secondRoom" type="checkers"/>
            </StRoomsContainer>
        </StRooms>
    )
}

export default MainRoomsList;
