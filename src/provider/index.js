import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import client from './graphql';

export const AppContext = createContext();

function AppProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCssClass, setSidebarCssClass] = useState('example4');
  const [sidebarHeader, setSidebarHeader] = useState(null);
  const [sidebarFooter, setSidebarFooter] = useState(null);

  const store = {
    sidebar: {
      open: sidebarOpen,
      setOpen: setSidebarOpen,
      cssClass: sidebarCssClass,
      setCssClass: setSidebarCssClass,
      header: sidebarHeader,
      setHeader: setSidebarHeader,
      footer: sidebarFooter,
      setFooter: setSidebarFooter,
    },
  };

  return (
    <AppContext.Provider value={store}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
};

AppProvider.defaultProps = {
  children: null,
};

export default AppProvider;
