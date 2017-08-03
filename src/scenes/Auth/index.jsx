import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import { actions as ModalActions } from '../../package/modules';
import LoginModal from './components/LoginModal';

class Auth extends React.Component {
  render() {
    return (
      <div>
        <h3>Auth</h3>
        <div>
          <button
            onClick={() =>
              this.props.toggleModal({
                title: 'Login',
                animated: 'bounceIn',
                component: LoginModal,
              })}
          >
            Login modal
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, pick(['toggleModal'], ModalActions))(Auth);
