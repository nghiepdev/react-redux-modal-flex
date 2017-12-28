import { mergeWithKey, merge, is, assoc } from 'ramda';

import * as actions from './actions';
import * as selectors from './selectors';
import ModalDefault from '../components/ModalDefault';

export { actions, selectors };

export default (defaultState = {}) => {
  const enhancer = (k, l, r) => (k === 'ok' ? merge(l, r) : r);
  const initState = mergeWithKey(
    enhancer,
    {
      show: false,
      classContent: 'modal-content',
      animation: 'zoomIn',
      duration: 300,
      mask: true,
      closeByMask: true,
      component: ModalDefault,
      title: 'This is a title',
      closeBtn: true,
      textCancel: 'Cancel',
      ok: {
        text: 'OK',
        classOk: 'modal-btn-ok',
        disabled: false,
        action: () => console.log('OK clicked'),
      },
    },
    defaultState
  );

  return (state = initState, action) => {
    switch (action.type) {
      case actions.TOGGLE_MODAL:
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
};
