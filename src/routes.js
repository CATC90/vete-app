import React from 'react';
import { Route } from 'react-router-dom';

import { Clients, Records } from './views';

function Routes() {
  return (
    <>
      <Route exact path="/clientes" component={Clients} />
      <Route exact path="/registros" component={Records} />
    </>
  );
}

export default Routes;
