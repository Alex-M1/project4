import { CompatClient, Stomp } from '@stomp/stompjs';
import { SERVER } from 'constants/urls';
import { eventChannel } from 'redux-saga';
import { addRoom } from 'store/room/actions';

export let stompClient: CompatClient | null = null;

export const connection = (token: string) => {
    const socket = new WebSocket(`${SERVER.socket}${SERVER.gameMenu}`);
    stompClient = Stomp.over(socket);
    return new Promise((resolve) => stompClient
        .connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
};
export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
    const roomsSub = stompClient.subscribe(
        server.rooms,
        ({ body }) => emit(addRoom(JSON.parse(body)), console.log(body)),
    );
    const errorSub = stompClient.subscribe(SERVER.errors, ({ body }) => console.log(body));
    return () => {
        roomsSub.unsubscribe();
        errorSub.unsubscribe();
    };
});
export const init = (stompClient: CompatClient) => {
    stompClient.send(SERVER.updateRoom);
};
