import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChannel } from 'thr0w-client-module/lib/ducks/channel';
import { grid } from 'thr0w-client-module/lib/grid';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DELAY, DURATION, MATRIX, DIMENSIONS, WAYPOINTS, ZOOM } from '../../config';
import * as fromLatLng from '../../ducks/latLng';
import * as fromStylesheet from './index.scss';

class Home extends Component {
  componentDidMount() {
    let i = 0;
    const { channel, latLng, setLatLng } = this.props;
    const frameEl = document.getElementById(fromStylesheet.frame);
    const frameContentEl = document.getElementById(fromStylesheet.frameContent);
    grid(channel, frameEl, frameContentEl, MATRIX, DIMENSIONS);
    this.map = L.map(fromStylesheet.frameContent).setView([latLng.lat, latLng.lng], ZOOM);
    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(this.map);
    window.setInterval(() => {
      i = i < WAYPOINTS.length - 1 ? i + 1 : 0;
      setLatLng(WAYPOINTS[i]);
    }, DELAY * 1000);
  }
  componentWillReceiveProps({ latLng }) {
    this.map.panTo(
      L.latLng(latLng.lat, latLng.lng),
      {
        animate: true,
        duration: DURATION,
      }
    );
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
  latLng: PropTypes.object,
  setLatLng: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    channel: getChannel(state),
    latLng: fromLatLng.getLatLng(state),
  }),
  {
    setLatLng: fromLatLng.setLatLng,
  }
)(Home);
