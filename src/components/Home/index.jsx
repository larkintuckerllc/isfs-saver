import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChannel } from 'thr0w-client-module/lib/ducks/channel';
import { grid } from 'thr0w-client-module/lib/grid';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MATRIX, DIMENSIONS } from '../../config';
import * as fromStylesheet from './index.scss';

class Home extends Component {
  componentDidMount() {
    const { channel } = this.props;
    const frameEl = document.getElementById(fromStylesheet.frame);
    const frameContentEl = document.getElementById(fromStylesheet.frameContent);
    grid(channel, frameEl, frameContentEl, MATRIX, DIMENSIONS);
    const map = L.map(fromStylesheet.frameContent).setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);
  }
  render() {
    return (
      <div id={fromStylesheet.frame}>
        <div id={fromStylesheet.frameContent} />
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
