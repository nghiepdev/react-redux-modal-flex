import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  padding: 10px;
`;

const LoginModal = () =>
  <Form action="">
    <h3>Validation form before enable Login button</h3>
    <div>
      <label htmlFor="username">Username: </label>
      <input type="text" />
    </div>

    <div>
      <label htmlFor="username">Password: </label>
      <input type="password" />
    </div>
  </Form>;

export default LoginModal;
