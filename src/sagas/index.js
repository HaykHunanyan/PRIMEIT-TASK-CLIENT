import { all, fork } from 'redux-saga/effects';
import users from './users';
import authManagement from './auth-management';

const combinedSagas = {
  ...users,
  ...authManagement,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map(fork));
}
