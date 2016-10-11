import { ACTION_PREFIX } from '../strings';

// API
// REDUCER MOUNT POINT
const reducerMountPoint = 'near';
// ACTIONS
export const SET_NEAR = `${ACTION_PREFIX}SET_NEAR`;
// ACTION CREATOR VALIDATORS
const validNear = value =>
  !(value === undefined || typeof value !== 'number');
// SCHEMA
// REDUCERS
export default (state = 0, action) => {
  switch (action.type) {
    case SET_NEAR:
      return action.value;
    default:
      return state;
  }
};
// ACCESSORS
export const getNear = (state) => state[reducerMountPoint];
// ACTION CREATORS
export const setNear = (value) => {
  if (!validNear(value)) throw new Error();
  return ({
    type: SET_NEAR,
    value,
  });
};
