import { takeEvery, call, take, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { notifications } from 'src/helpers/notification';
import { cookieMaster } from 'src/helpers/cookieMaster';
import { connection, createStompChannel, init } from 'src/helpers/stompClient';
import { ActionTypes as AT } from './actionTypes';

export function* workerConnection() :SagaIterator {
    try {
        const token: string = yield call([cookieMaster, 'getCookie'], 'token');
        const stompClient = yield call(connection, token);
        const stompChannel = yield call(createStompChannel, stompClient);
        yield call(init, stompClient);
        while (stompChannel) {
            const payload = yield take(stompChannel);
            yield put(payload);
        }
    } catch (e) {
        yield call(notifications, { message: 'something_wrong' }); 
    }
}
// export function* workerJoinRoom({ payload }): SagaIterator {
//     const userLogin = yield select(getUserLogin);
//     const body = { guestLogin: userLogin, id: payload };
//     stompClient.subscribe(`/topic/game/${payload}`, (message) => {
//         console.log(message);
//     });
//     stompClient.send('/radioactive/join-room', {}, JSON.stringify(body));
// }

export function* watcherGame() {
    yield takeEvery(AT.SOCKET_CONNECTION, workerConnection);
    // yield takeEvery(AT.JOIN_ROOM, workerJoinRoom);
}
