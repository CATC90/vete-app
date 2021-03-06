import React from 'react';
import { Icon } from 'semantic-ui-react';

const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const sidebarItems = [
  {
    type: 'link',
    label: 'Inicio',
    to: '/inicio',
    icon: <Icon name="home" size="large" style={{ marginRight: 10 }} />,
  },
  {
    type: 'link',
    label: 'Clientes',
    to: '/clientes',
    icon,
  },
  {
    type: 'link',
    label: 'Buttons',
    to: '/buttons',
    icon,
  },
  {
    type: 'link',
    label: 'Cards',
    to: '/cards',
    icon,
  },
  {
    type: 'link',
    label: 'Selects',
    to: '/selects',
    icon,
  },
  {
    type: 'link',
    label: 'Sidebars',
    to: '/sidebars',
    icon,
  },
  {
    type: 'link',
    label: 'Tables',
    to: '/tables',
    icon,
  },
];

export default sidebarItems;
