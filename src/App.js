import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout';

import AppProvider from './provider';
import AppContent from './appContent';

function App() {
  return (
    <Layout>
      <Router>
        <AppProvider>
          <AppContent />
        </AppProvider>
      </Router>
    </Layout>
  );
}

export default App;
