import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productDetail from './detailReducer';

export default combineReducers({
  products: productReducer,
  detail: productDetail,
});
