import React from 'react';
import {connect} from 'react-redux';
import {pick} from 'ramda';

import {actions as ModalActions} from '../src';

import ModalSample from './ModalSample';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>REACT-REDUX-MODAL-FLEX</h1>
        <h4 className="text-center">Make easy a modal/popup with Redux</h4>
        <div className="buttons">
          <button
            onClick={() =>
              this.props.toggleModal({
                component: ModalSample,
                ok: {
                  action: () => alert('Zoom'),
                },
              })
            }>
            Zoom
          </button>

          <button
            onClick={() =>
              this.props.toggleModal({
                component: ModalSample,
                animation: 'fadeIn',
                ok: {
                  action: () => alert('Fade'),
                },
              })
            }>
            Fade
          </button>

          <button
            onClick={() =>
              this.props.toggleModal({
                component: ModalSample,
                animation: 'bounceIn',
                duration: 750,
                ok: {
                  action: () => alert('Bounce'),
                },
              })
            }>
            Bounce
          </button>
        </div>

        <div className="text-center">
          More animations from{' '}
          <a href="https://daneden.github.io/animate.css/" target="_blank">
            Animate.css
          </a>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  pick(['toggleModal'], ModalActions),
)(App);
