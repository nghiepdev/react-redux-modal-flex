import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  padding: 10px;
`;

class LoginModal extends React.Component {
  state = {
    form: {
      username: '',
      password: '',
    },
    isValid: undefined,
  };

  componentDidMount() {
    this.setState({
      isValid: false,
    });
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(function(prevState) {
      return { form: { ...prevState.form, [name]: value } };
    });
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isValid !== this.state.isValid) {
      nextProps.modifyOkModal({
        text: nextState.isValid ? 'Login' : 'Invalid',
        disabled: !nextState.isValid,
        action: () => {
          alert('submited form, click OK to close modal');
          nextProps.toggleModal(false);
        },
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.form !== this.state.form) {
      const { username, password } = this.state.form;
      this.setState({
        isValid: !!(username.trim() && password.trim()),
      });
    }
  }

  render() {
    return (
      <Form action="">
        <h3>Validation form before enable Login button</h3>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={this.state.form.username}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={this.state.form.password}
            onChange={this.handleChange}
          />
        </div>
      </Form>
    );
  }
}

export default LoginModal;
