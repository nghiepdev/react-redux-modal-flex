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

const Footer = ({ textOk, textCancel, toggleModal, disabledOk, actionOk }) =>
  <Wrapper>
    {textCancel
      ? <Button onClick={() => toggleModal(false)}>
          {textCancel}
        </Button>
      : null}
    {textOk
      ? <Button primary isDisabled={disabledOk} onClick={() => actionOk()}>
          {textOk}
        </Button>
      : null}
  </Wrapper>;

Footer.propTypes = {
  textOk: PropTypes.string.isRequired,
  textCancel: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  actionOk: PropTypes.func.isRequired,
  disabledOk: PropTypes.bool.isRequired,
};

export default Footer;
