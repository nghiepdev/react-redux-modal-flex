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

const Close = styled.span`
  position: absolute;
  top: 50%;
  right: 3px;
  transform: translateY(-50%);
  cursor: pointer;
  right: 5px;
  width: 16px;
  height: 16px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    transition: background 0.2s;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover:before,
  &:hover:after {
    background: #333;
  }
`;

const Header = ({ title, toggleModal, closeBtn }) =>
  title && (
    <Wrapper>
      <span>{title}</span>
      {closeBtn && <Close onClick={() => toggleModal(false)} />}
    </Wrapper>
  );

Header.propTypes = {
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  closeBtn: PropTypes.bool.isRequired,
};

export default Header;
