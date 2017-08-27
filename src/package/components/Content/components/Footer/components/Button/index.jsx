import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cls from 'classnames';

const Wrapper = styled.span`
  color: #83878d;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 12px;
  text-transform: uppercase;
  transition: all .2s;
  &:hover {
    background: #f2fbff;
    color: #6d7379;
  }
  &.primary {
    color: #fc4a4a;
  }
  &.isDisabled {
    pointer-events: none;
    opacity: 0.6;
  }
`;

const Button = ({ children, isDisabled, onClick, primary, className }) =>
  <Wrapper
    className={cls(className, { isDisabled, primary })}
    onClick={onClick}
  >
    {children}
  </Wrapper>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
