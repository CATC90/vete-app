import propTypes from 'prop-types';
import React from 'react';
import './layout.css';

function Layout({ children }) {
  return <div className="__layout">{children}</div>;
}

Layout.propTypes = { children: propTypes.node.isRequired };

export default Layout;
