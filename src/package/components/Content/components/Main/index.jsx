import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  min-width: 350px;
  min-height: 200px;
  max-width: 90vw;
  max-height: 80vh;
`;

const Main = ({ children }) =>
  <Wrapper>
    {children}
  </Wrapper>;

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
