import { combineReducers } from 'redux';

import entities from './entities';
import loading from './loading';
import error from './error';
import user from './users';
import authManagement from './auth-management';

const appReducer = combineReducers({
  entities,
  loading,
  error,
  user,
  authManagement,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => appReducer(state, action);
