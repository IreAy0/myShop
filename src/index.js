import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './App';

const initialState = {};
if (localStorage.getItem('cartItems')) {
  initialState.cart = { items: JSON.parse(localStorage.getItem('cartItems')) };
}
const store = createStore(reducers, initialState,
  applyMiddleware(reduxThunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
