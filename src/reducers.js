import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import thr0w from 'thr0w-client-module/lib/ducks/thr0w';
import near from './ducks/near';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  // THR0W INTEGRATION
  thr0w,
  // END THR0W INTEGRATION
  near,
});
