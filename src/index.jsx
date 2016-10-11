import 'babel-polyfill';
import 'bootstrap-loader';
import React from 'react';
import { setBaseHttp, setBaseSocket } from 'thr0w-client-module';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';
import './favicon.ico';
import './index.scss';

if (process.env.NODE_ENV !== 'production') {
  window.console.log('DEVELOPMENT ENVIRONMENT');
}
// THR0W INTEGRATION
setBaseHttp('http://localhost:3000');
setBaseSocket('http://localhost:3001');
// END
const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
