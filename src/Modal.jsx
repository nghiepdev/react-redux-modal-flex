import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cls from 'classnames';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {pick, is} from 'ramda';

import {GlobalStyle} from './styled';
import {actions as ModalActions, selectors as ModalSelectors} from './modules';

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
    Component: PropTypes.func,
    classContent: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    mask: PropTypes.bool.isRequired,
    closeByMask: PropTypes.bool.isRequired,
    title: PropTypes.string,
    closeBtn: PropTypes.bool.isRequired,
    textOk: PropTypes.string,
    classOk: PropTypes.string.isRequired,
    actionOk: PropTypes.func,
    disabledOk: PropTypes.bool,
    textCancel: PropTypes.string,
    isFooter: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    modifyOkModal: PropTypes.func.isRequired,
  };

  render() {
    const {
      show,
      classContent,
      animation,
      Component,
      toggleModal,
      modifyOkModal,
    } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper show={show}>
          <Content
            className={cls('animated', classContent, animation)}
            {...this.props}>
            {show && is(Function, Component) && (
              <Component
                toggleModal={toggleModal}
                modifyOkModal={modifyOkModal}
              />
            )}
          </Content>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default connect(
  createStructuredSelector(
    pick(
      [
        'show',
        'Component',
        'classContent',
        'animation',
        'duration',
        'mask',
        'closeByMask',
        'title',
        'closeBtn',
        'textOk',
        'classOk',
        'actionOk',
        'disabledOk',
        'textCancel',
        'isFooter',
      ],
      ModalSelectors,
    ),
  ),
  pick(['toggleModal', 'modifyOkModal'], ModalActions),
)(Modal);
