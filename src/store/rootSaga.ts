import { all, fork } from '@redux-saga/core/effects';
import watcherGame from './room/sagas';
import statisticWatcher from './statistic/sagas';
import ticTacWatcher from './ticTac/sagas';
import userWatcher from './user/sagas';

const sagas = [
  userWatcher,
  watcherGame,
  statisticWatcher,
  ticTacWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
