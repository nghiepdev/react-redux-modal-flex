import React from 'react';

class ModalSample extends React.Component {
  state = {
    style: {
      padding: '20px 0px',
      width: '500px',
    },
  };

  static defaultProps = {
    content: 'My modal popup',
  };

  render() {
    return <div style={this.state.style}>{this.props.content}</div>;
  }
}

export default ModalSample;
