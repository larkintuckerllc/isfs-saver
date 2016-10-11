import 'babel-polyfill';
import 'bootstrap-loader';
import React from 'react';
import { setBaseHttp, setBaseSocket } from 'thr0w-client-module';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BASE_URL_HTTP, BASE_URL_SOCKET } from './config';
import configureStore from './configureStore';
import App from './components/App';
import './favicon.ico';
import './index.scss';

if (process.env.NODE_ENV !== 'production') {
  window.console.log('DEVELOPMENT ENVIRONMENT');
}
setBaseHttp(BASE_URL_HTTP);
setBaseSocket(BASE_URL_SOCKET);
const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
