import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const Wrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.mask ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  animation-duration: .2s;
  & > div.animated {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    min-height: 200px;
    max-width: 90vw;
    max-height: 80vh;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #ebebee;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    animation-duration: ${props => props.duration}ms;
  }
`;

class Content extends React.Component {
  static propTypes = {
    mask: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node,
    isFooter: PropTypes.bool.isRequired,
    duration: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };

  onClick = ({ target }) => {
    const { mask, closeByMask, toggleModal } = this.props;
    if (mask && closeByMask && /modal-overlay/i.test(target.className)) {
      toggleModal(false);
    }
  };

  render() {
    const { mask, className, children, isFooter, duration } = this.props;

    return (
      <Wrapper
        className="animated fadeIn modal-overlay"
        onClick={this.onClick}
        mask={mask}
        duration={duration}
      >
        <div className={className}>
          <Header {...this.props} />
          <Main>
            {children}
          </Main>
          {isFooter && <Footer {...this.props} />}
        </div>
      </Wrapper>
    );
  }
}

export default Content;
