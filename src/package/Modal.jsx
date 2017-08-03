import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cls from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { pick, is } from 'ramda';

import {
  actions as ModalActions,
  selectors as ModalSelectors,
} from './modules';

import Content from './components/Content';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  overflow: hidden;
  z-index: 9999;
  display: ${props => (props.show ? 'block' : 'none')};
`;

class Modal extends React.Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    Component: PropTypes.func,
    closeBtn: PropTypes.bool.isRequired,
    isFooter: PropTypes.bool.isRequired,
    mask: PropTypes.bool.isRequired,
    closeByMask: PropTypes.bool.isRequired,
    textOk: PropTypes.string,
    actionOk: PropTypes.func.isRequired,
    disabledOk: PropTypes.bool,
    textCancel: PropTypes.string,
  };

  render() {
    const {
      show,
      classWrap,
      animated,
      Component,
      toggleModal,
      modifyOkModal,
    } = this.props;
    return (
      <Wrapper show={show}>
        <Content
          className={cls('animated', classWrap, animated)}
          {...this.props}
        >
          {show && is(Function, Component)
            ? <Component
                toggleModal={toggleModal}
                modifyOkModal={modifyOkModal}
              />
            : null}
        </Content>
      </Wrapper>
    );
  }
}

export default connect(
  createStructuredSelector(
    pick(
      [
        'show',
        'classWrap',
        'animated',
        'mask',
        'closeByMask',
        'title',
        'Component',
        'closeBtn',
        'textOk',
        'actionOk',
        'disabledOk',
        'textCancel',
        'isFooter',
      ],
      ModalSelectors
    )
  ),
  pick(['toggleModal', 'modifyOkModal'], ModalActions)
)(Modal);
