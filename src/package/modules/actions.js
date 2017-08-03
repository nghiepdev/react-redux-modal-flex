export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';
export const MODIFY_OK = 'model/MODIFY_OK';

export const toggleModal = payload => ({
  type: TOGGLE_MODAL,
  payload,
});

export const modifyOkModal = payload => ({
  type: MODIFY_OK,
  payload,
});
