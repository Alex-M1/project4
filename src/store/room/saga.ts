import { SagaIterator } from 'redux-saga';
import { select } from 'redux-saga-test-plan/matchers';
import { getGameType, getRoomList } from './selectors';

export function* addRoom(): SagaIterator {
  const room = yield select(getRoomList);
}
export function* setGameType(): SagaIterator {
  const gameType = yield select(getGameType);
}
