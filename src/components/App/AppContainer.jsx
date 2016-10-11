import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const AppContainer = ({ children }) => (
  <div id="root__app_container">
    {children}
  </div>
);
AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default connect(
  null,
  null
)(AppContainer);
