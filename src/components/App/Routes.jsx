import React, { PropTypes } from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import AppContainer from './AppContainer';
import Demo from '../Demo';
import ScreenSaver from '../ScreenSaver';

const Routes = (props, { store }) => (
  <Router history={syncHistoryWithStore(hashHistory, store)}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ScreenSaver} />
      <Route path="demo" component={Demo} />
    </Route>
  </Router>
);
Routes.contextTypes = {
  store: PropTypes.object.isRequired,
};
export default Routes;
