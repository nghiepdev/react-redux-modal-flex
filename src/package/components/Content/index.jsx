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
  background: ${props => (props.mask ? 'rgba(0, 0, 0, 0.6)' : 'transparent')};
  animation-duration: .2s;
  & > div {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #ebebee;
    animation-duration: .3s;
  }
`;

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    mask: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    isFooter: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };

  onClick = ({ target }) => {
    const { mask, closeByMask, toggleModal } = this.props;
    if (mask && closeByMask && /overlay-close/i.test(target.className)) {
      toggleModal(false);
    }
  };

  render() {
    const { mask, className, children, isFooter } = this.props;
    return (
      <Wrapper
        className="animated fadeIn overlay-close"
        onClick={this.onClick}
        mask={mask}
      >
        <div className={className}>
          <Header {...this.props} />
          <Main>
            {children}
          </Main>
          {isFooter ? <Footer {...this.props} /> : null}
        </div>
      </Wrapper>
    );
  }
}

export default Content;
