import { select } from 'redux-saga-test-plan/matchers';
import { getGameType, getRoomList } from './selectors';

// export function* addRoom(): SagaIterator {
//   const room = yield select(getRoomList);
// }
// export function* setGameType(): SagaIterator {
//   const gameType = yield select(getGameType);
// }

import { takeEvery, call, take, put } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { eventChannel, SagaIterator } from 'redux-saga';
import i18next from 'i18next';
import { support } from '../../helpers/support';
import { actionTypes } from './actionTypes';
import { putRooms } from './actions';
import { notifications } from 'src/helpers/notification';


const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
  const roomsSub = stompClient.subscribe(routes.ws.subs.rooms, ({ body }) => emit(putRooms(JSON.parse(body))));
  return () => {
    roomsSub.unsubscribe();
  };
});
const init = (stompClient: CompatClient) => {
  stompClient.send(`${routes.ws.actions.getRooms}`);
};

function* workerConnection(): SagaIterator {
  try {
    const token: string = yield call([support, support.getTokenFromCookie], 'token');
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

export function* watcherGame() {
  yield takeEvery(actionTypes.GET_SOCKJS_CONNECTION, workerConnection);
}

/*
stompClient.subscribe('/topic/rooms', (message) => {
             console.log(JSON.parse(message.body));
         });
         stompClient.subscribe('/user/topic/errors', (message) => {
             console.log(message);
         });
         stompClient.subscribe('/');
          stompClient.send('/radioactive/create-room',
             { Authorization: token },
             JSON.stringify({
                 creatorLogin: 'KekShrek',
                 gameType: 'Checkers',
                 id: uuidv4(),
             }));
     stompClient.send('/radioactive/update-room', { Authorization: token }); */