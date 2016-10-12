export const ACTION_PREFIX = 'app/';
const BASE = `${window.location.protocol}//${window.location.hostname}`;
export const BASE_URL_HTTP = `${BASE}:3000`;
export const BASE_URL_SOCKET = `${BASE}:3001`;
export const CHANNELS = [0, 1];
export const MATRIX = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];
export const DIMENSIONS = [
  {
    width: 1920,
    height: 1080,
    scale: 0.84,
    padding: 0,
    spacing: 28,
    margin: 20,
  },
  {
    width: 1920,
    height: 1080,
    scale: 0.84,
    padding: 0,
    spacing: 28,
    margin: 60,
  },
  {
    width: 1080,
    height: 1920,
    scale: 1,
    padding: 111,
    spacing: 112,
    margin: 0,
  },
];
export const WAYPOINTS = [{
  lat: 0,
  lng: 0,
}, {
  lat: 0,
  lng: 45,
}];
export const DURATION = 10;
export const DELAY = 30;
export const ZOOM = 5;
export const DAY_TILES_URL = 'http://192.168.1.2:8080/satellite/{z}/{y}/{x}';
// eslint-disable-next-line
export const DAY_TILES_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
