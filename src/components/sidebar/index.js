import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

const itemsConstructor = (items, hide, tabIndex) => {
  if (items.length <= 0) return null;

  return (
    <ul>
      {items.map((item) => {
        switch (item?.type) {
          case 'separator':
            return <hr key="sidebar-separator" />;
          case 'title':
            return (
              <li className="title" key={`sidebar-title-${item.label}`}>
                {item?.label}
              </li>
            );
          case 'link':
            return (
              <li key={`sidebar-link-${item.to}`}>
                <NavLink
                  tabIndex={tabIndex}
                  activeClassName="active"
                  to={item?.to}
                  onClick={hide}
                >
                  {item?.icon}
                  {item?.label}
                </NavLink>
              </li>
            );
          default:
            return null;
        }
      })}
    </ul>
  );
};

const Sidebar = ({
  id,
  cssClass,
  coverCssClass,
  items,
  headerContent,
  footerContent,
  isOpen,
  hide,
  tabIndex,
}) => (
  <>
    <nav id={id} className={`__sidebar ${isOpen ? 'open' : ''} ${cssClass}`}>
      <header>{headerContent}</header>
      <main>{itemsConstructor(items, hide, tabIndex)}</main>
      <footer>{footerContent}</footer>
    </nav>
    <section
      id={`${id}-cover`}
      className={`__cover ${isOpen ? 'open' : ''} ${coverCssClass}`}
    >
      <button onClick={hide} type="button">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </section>
  </>
);

Sidebar.defaultProps = {
  id: 'sidebar',
  headerContent: null,
  footerContent: null,
  cssClass: '',
  items: [],
  coverCssClass: '',
  isOpen: false,
  hide: () => {},
  tabIndex: null,
};

Sidebar.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
  headerContent: PropTypes.node,
  footerContent: PropTypes.node,
  cssClass: PropTypes.string,
  coverCssClass: PropTypes.string,
  isOpen: PropTypes.bool,
  hide: PropTypes.func,
  tabIndex: PropTypes.number,
};

export default Sidebar;
