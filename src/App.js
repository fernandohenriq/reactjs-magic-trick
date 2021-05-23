import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';

import { Store } from './store';

function App () {
  return (
  <Provider store={ Store }>
    <Routes />
  </Provider>
  );
};

export default App;
