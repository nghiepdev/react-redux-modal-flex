import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h4`
  position: relative;
  background: #fafafc;
  color: #111;
  border-bottom: 1px solid #ebebee;
  margin: 0px;
  padding: 6px 10px;
  font-weight: normal;
  text-align: left;
`;

const Close = styled.i`
  position: absolute;
  top: 50%;
  right: 3px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Header = ({ title, toggleModal, closeBtn }) =>
  <Wrapper>
    <span>
      {title}
    </span>
    {closeBtn
      ? <Close onClick={() => toggleModal(false)}>&#x2715;</Close>
      : null}
  </Wrapper>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  closeBtn: PropTypes.bool.isRequired,
};

export default Header;
