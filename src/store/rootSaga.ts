import { all, fork } from '@redux-saga/core/effects';
import watcherGame from './room/sagas';
import ticTacWatcher from './ticTac/sagas';
import userWatcher from './user/sagas';

const sagas = [
  userWatcher,
  watcherGame,
  ticTacWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
