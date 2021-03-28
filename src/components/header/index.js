import propTypes from 'prop-types';
import React from 'react';
import './header.css';
import { OpenSidebarIcon } from './icons';

function Header({ showSidebar }) {
  return (
    <header className="__header">
      <button type="button" className="open-sidebar" onClick={() => showSidebar()}>
        <OpenSidebarIcon />
      </button>
      <span className="__title" />
    </header>
  );
}

Header.propTypes = {
  showSidebar: propTypes.bool.isRequired,
};

export default Header;
