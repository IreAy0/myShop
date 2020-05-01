import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productDetail from './detailReducer';
import cartItems from './cartReducer';

export default combineReducers({
  products: productReducer,
  detail: productDetail,
  cart: cartItems,
});
