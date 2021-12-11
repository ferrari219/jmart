import React from 'react';
import PropTypes from 'prop-types';

const NavUl = ({ children }) => {
  return <ul>{children}</ul>;
};
NavUl.defaultProps = {
  children: '메뉴가 없습니다.',
};
NavUl.propTypes = {
  children: PropTypes.element,
};

export default NavUl;
