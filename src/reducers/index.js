import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productDetail from './detailReducer';
import cart from './cartReducer';

export default combineReducers({
  products: productReducer,
  detail: productDetail,
  cart: cart,
});
