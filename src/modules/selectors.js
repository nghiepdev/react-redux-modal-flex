import { createSelector } from 'reselect';

export const modal = state => state.modal;

export const show = createSelector(modal, modal => modal.show);

export const classContent = createSelector(modal, modal => modal.classContent);

export const animation = createSelector(modal, modal => modal.animation);

export const duration = createSelector(modal, modal => modal.duration);

export const mask = createSelector(modal, modal => modal.mask);

export const closeByMask = createSelector(modal, modal => modal.closeByMask);

export const Component = createSelector(modal, modal => modal.component);

export const title = createSelector(modal, modal => modal.title);

export const closeBtn = createSelector(modal, modal => modal.closeBtn);

export const textCancel = createSelector(modal, modal => modal.textCancel);

export const ok = createSelector(modal, modal => modal.ok);

export const textOk = createSelector(ok, ok => ok.text);

export const classOk = createSelector(ok, ok => ok.classOk);

export const actionOk = createSelector(ok, ok => ok.action);

export const disabledOk = createSelector(ok, ok => ok.disabled);

export const isFooter = createSelector(
  textCancel,
  textOk,
  (cancel, ok) => !!(ok || cancel)
);
