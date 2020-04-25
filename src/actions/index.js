/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import history from '../history';
import api from '../api/allapi';

export const fetchProducts = () => async (dispatch) => {
  const response = await api.getData('products/v2/list'); // //It's working even without the parameter, so it's not doing anything
  // const response = await api.getData('products/v2/list'); 

  dispatch({ type: 'FETCH_PRODUCTS', payload: response.products });
};
