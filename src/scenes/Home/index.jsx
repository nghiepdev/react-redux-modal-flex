import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'ramda';

import { actions as ModalActions } from '../../package/modules';

import ModalSample from '../../components/ModalSample';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Homepage</div>
        <button
          onClick={() =>
            this.props.toggleModal({
              component: ModalSample,
              ok: {
                action: () => alert('Ok clicked'),
              },
            })
          }
        >
          Open modal sample
        </button>
      </div>
    );
  }
}

export default connect(null, pick(['toggleModal'], ModalActions))(Home);
