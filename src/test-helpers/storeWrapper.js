import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootSaga from 'sagas/index';
import store from 'configs/configureStore';
import appState from 'reducers';
import SagaTester from 'redux-saga-tester';

const sagaTester = new SagaTester({
  initialState: store.getState(),
  reducers: appState,
});

sagaTester.start(rootSaga);

const renderWithRedux = (component, appStore) => {
  return {
    ...render(<Provider store={appStore}>{component}</Provider>),
  };
};

export { sagaTester, renderWithRedux };
