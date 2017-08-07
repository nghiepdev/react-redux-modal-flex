import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './components/Button';

const Wrapper = styled.footer`
  margin-top: auto;
  padding: 15px 10px;
  border-top: 1px solid #e5e5e9;
  display: flex;
  justify-content: flex-end;
`;

const Footer = ({
  textOk,
  classOk,
  textCancel,
  toggleModal,
  disabledOk,
  actionOk,
}) =>
  <Wrapper>
    {textCancel &&
      <Button onClick={() => toggleModal(false)}>
        {textCancel}
      </Button>}
    {textOk &&
      <Button
        primary
        isDisabled={disabledOk}
        onClick={() => actionOk()}
        className={classOk}
      >
        {textOk}
      </Button>}
  </Wrapper>;

Footer.propTypes = {
  textOk: PropTypes.string.isRequired,
  classOk: PropTypes.string.isRequired,
  textCancel: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  actionOk: PropTypes.func.isRequired,
  disabledOk: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Footer;
