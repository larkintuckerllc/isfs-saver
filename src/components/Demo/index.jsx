import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as fromReactRouterRedux from 'react-router-redux';
import * as fromNear from '../../ducks/near';

const Demo = ({ near, push, setNear }) => (
  <div>
    <div
      onClick={() => push('/')}
    >ScreenSaver</div>
    <div>{near}</div>
    <div className="form-group">
      <button
        type="button"
        className="btn btn-default"
        onClick={() => setNear(near + 1)}
      >Increment</button>
    </div>
  </div>
);
Demo.propTypes = {
  near: PropTypes.number.isRequired,
  push: PropTypes.func.isRequired,
  setNear: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    near: fromNear.getNear(state),
  }),
  {
    push: fromReactRouterRedux.push,
    setNear: fromNear.setNear,
  }
)(Demo);
