import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './components/Button';

const Wrapper = styled.footer`
  margin-top: auto;
  padding: 10px;
  border-top: 1px solid #e5e5e9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 auto;
`;

const Footer = ({
  textOk,
  classOk,
  textCancel,
  toggleModal,
  disabledOk,
  actionOk,
}) => (
  <Wrapper>
    {textCancel && (
      <Button onClick={() => toggleModal(false)}>{textCancel}</Button>
    )}
    {textOk && (
      <Button
        primary
        isDisabled={disabledOk}
        onClick={() => actionOk && actionOk()}
        className={classOk}
      >
        {textOk}
      </Button>
    )}
  </Wrapper>
);

Footer.propTypes = {
  textOk: PropTypes.string,
  classOk: PropTypes.string.isRequired,
  textCancel: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
  actionOk: PropTypes.func,
  disabledOk: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Footer;
