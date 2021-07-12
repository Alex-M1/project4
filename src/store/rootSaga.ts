import { all, fork } from '@redux-saga/core/effects';
import { credentialsWatcher } from './credentials/sagas';

const sagas = [
  credentialsWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
