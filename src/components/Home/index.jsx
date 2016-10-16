import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChannel } from 'thr0w-client-module/lib/ducks/channel';
import { grid } from 'thr0w-client-module/lib/grid';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DAY_TILES_URL, DAY_TILES_ATTRIBUTION, DELAY, DURATION, MATRIX,
  DIMENSIONS, WAYPOINTS, ZOOM } from '../../config';
import * as fromLatLng from '../../ducks/latLng';
import styles from './index.scss';

class Home extends Component {
  componentDidMount() {
    const { channel, latLng, setLatLng } = this.props;
    const frameEl = document.getElementById(styles.frame);
    const frameContentEl = document.getElementById(styles.frameContent);
    grid(channel, frameEl, frameContentEl, MATRIX, DIMENSIONS);
    this.map = L.map(
      styles.frameContent,
      {
        zoomControl: false,
        attributionControl: false,
      }
    ).setView([latLng.lat, latLng.lng], ZOOM);
    L.tileLayer(DAY_TILES_URL, {
      attribution: DAY_TILES_ATTRIBUTION,
      maxZoom: 18,
    }).addTo(this.map);
    if (channel === 0) {
      let i = 0;
      window.setInterval(() => {
        i = i < WAYPOINTS.length - 1 ? i + 1 : 0;
        setLatLng(WAYPOINTS[i]);
      }, DELAY * 1000);
    }
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
      <div id={styles.frame}>
        <div id={styles.frameContent} />
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
