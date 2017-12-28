import { combineReducers } from 'redux';

import user from './modules/user';
import { reducer as modal } from '../../src';

const reducers = combineReducers({
  user,
  modal: modal({ textCancel: 'Close' }),
});

export default reducers;
