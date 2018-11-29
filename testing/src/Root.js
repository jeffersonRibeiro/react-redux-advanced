import React from 'react';
import { Provider } from 'react-redux';
import { createStire, createStore } from 'redux';

import reducers from 'services/reducers';

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  );
};
