import { combineReducers } from 'redux';

import user from './modules/user';
import modal from '../package/modules';

const reducers = combineReducers({
  user,
  modal: modal({ textCancel: 'Close' }),
});

export default reducers;
