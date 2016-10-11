import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getAuthenticated } from 'thr0w-client-module/lib/ducks/authenticated';
import { getChannel } from 'thr0w-client-module/lib/ducks/channel';
import { getConnected } from 'thr0w-client-module/lib/ducks/connected';
import Authentication from './Authentication';
import Channel from './Channel';
import Connect from './Connect';
import Routes from './Routes';

const App = ({ authenticated, channel, connected }) => {
  if (!authenticated) return <Authentication />;
  if (channel === null) return <Channel />;
  if (!connected) return <Connect />;
  return <Routes />;
};
App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  channel: PropTypes.number,
  connected: PropTypes.bool.isRequired,
};
export default connect(
  state => ({
    authenticated: getAuthenticated(state),
    channel: getChannel(state),
    connected: getConnected(state),
  }),
  null
)(App);
