import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import * as api from './api/allapi';
import reducers from './reducers/index';
import App from './App';

const store = createStore(reducers,
  applyMiddleware(reduxThunk.withExtraArgument(api)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
