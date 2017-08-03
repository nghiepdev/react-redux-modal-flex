import { mergeWithKey, merge, is, assoc } from 'ramda';

import * as actions from './actions';
import * as selectors from './selectors';
import ModalDefault from '../components/ModalDefault';

const initState = {
  show: false,
  classWrap: 'react-redux-modal-flex',
  animated: 'zoomIn',
  mask: true,
  closeByMask: true,
  component: ModalDefault,
  title: 'This is a title',
  closeBtn: true,
  textCancel: 'Cancel',
  ok: {
    text: 'OK',
    disabled: false,
    action: () => console.log('OK clicked'),
  },
};

export { actions, selectors };

export default (state = initState, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODAL:
      const enhancer = (k, l, r) => (k === 'ok' ? merge(l, r) : r);
      if (is(Object, action.payload)) {
        return mergeWithKey(
          enhancer,
          initState,
          merge({ show: true }, action.payload)
        );
      }
      return assoc('show', false, state);
    case actions.MODIFY_OK:
      return assoc('ok', merge(state.ok, action.payload), state);
    default:
      return state;
  }
};
