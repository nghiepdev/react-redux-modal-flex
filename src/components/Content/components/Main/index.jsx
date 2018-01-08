import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 100%;
  padding: 0px 10px;
  overflow: auto;
  > * {
    box-sizing: border-box;
    max-width: 100%;
  }
`;

const Main = ({ children }) => <Wrapper>{children}</Wrapper>;

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
