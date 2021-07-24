import { takeEvery, call, take, put, select } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { SagaIterator } from 'redux-saga';
import { notifications } from 'src/helpers/notification';
import { cookieMaster } from 'src/helpers/cookieMaster';
import { connection, createStompChannel, init, stompClient } from 'src/helpers/stompClient';
import { LOCAL_STORAGE as LS } from 'constants/constants';
import { SERVER } from 'constants/urls';
import { ActionTypes as AT } from './actionTypes';
import { getGameType } from './selectors';

export function* workerConnection(): SagaIterator {
    try {
        const token: string = yield call([cookieMaster, 'getCookie'], LS.token);
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
export function* createRoomSaga(): SagaIterator {
    try {
        const gameType = yield select(getGameType);
        const creatorLogin = yield call([localStorage, 'getItem'], LS.login);
        const id = yield call(uuidv4);
        const createRoomBody = {
            id,
            gameType,
            creatorLogin,
        };
        yield call([stompClient, 'send'], SERVER.createRoom, {}, JSON.stringify(createRoomBody));
    } catch (err) {
        yield call(notifications, { message: 'something_wrong' });
    }
}

export default function* watcherGame() {
    yield takeEvery(AT.SOCKET_CONNECTION, workerConnection);
    yield takeEvery(AT.CREATE_ROOM, createRoomSaga);
}
