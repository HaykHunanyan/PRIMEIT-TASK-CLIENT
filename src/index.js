// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'configs/configureStore';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App store={store} />, rootElement);
} else {
  ReactDOM.render(<App store={store} />, rootElement);
}

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
