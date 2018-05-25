import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => <header className="header">{props.children}</header>;

Header.defaultProps = {
  children: 'Título do header',
};

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
