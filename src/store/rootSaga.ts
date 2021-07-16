import { all, fork } from '@redux-saga/core/effects';
import userWatcher from './user/sagas';

const sagas = [
  userWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
