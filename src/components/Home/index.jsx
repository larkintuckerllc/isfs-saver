import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChannel } from 'thr0w-client-module/lib/ducks/channel';
import { grid } from 'thr0w-client-module/lib/grid';
import { MATRIX, DIMENSIONS } from '../../config';
import * as fromStylesheet from './index.scss';

class Home extends Component {
  componentDidMount() {
    const { channel } = this.props;
    const frameEl = document.getElementById(fromStylesheet.frame);
    const frameContentEl = document.getElementById(fromStylesheet.frameContent);
    grid(channel, frameEl, frameContentEl, MATRIX, DIMENSIONS);
  }
  render() {
    return (
      <div id={fromStylesheet.frame}>
        <div id={fromStylesheet.frameContent}>
          what
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  channel: PropTypes.number.isRequired,
};
export default connect(
  state => ({
    channel: getChannel(state),
  }),
  null
)(Home);
