import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fromReactRouterRedux from 'react-router-redux';

const ScreenSaver = ({ push }) => (
  <div>
    <div
      onClick={() => push('/demo')}
    >Demo</div>
    <div>SCREEN SAVER</div>
  </div>
);
ScreenSaver.propTypes = {
  push: PropTypes.func.isRequired,
};
export default connect(
  null,
  {
    push: fromReactRouterRedux.push,
  }
)(ScreenSaver);
