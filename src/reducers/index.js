import { combineReducers } from 'redux';

import aboutReducer from './about';
import information from './information';

const rootReducer = combineReducers({
  aboutReducer,
  information
});
export default rootReducer;
