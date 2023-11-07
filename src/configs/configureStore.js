import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import appState from 'reducers';
import rootSaga from 'sagas';
// import axios from 'axios';
import { clearRegisteredUser } from 'actions/users';
import { loadState, saveState } from './localStorage'; // getAccessToken
// import { API_ROOT } from './env-vars';

const persistedState = loadState();
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    appState,
    persistedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.subscribe(() => {
    const data = store.getState();
    if (data.error.LOAD_GET_LOGEDIN_USER?.code !== 401) saveState(data);
    else store.dispatch(clearRegisteredUser.request());
  });

  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('reducers', () => {
        store.replaceReducer(appState);
      });
    }
  }
  return store;
};

export default configureStore();
