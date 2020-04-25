/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import history from '../history';
import apis from '../api/allapi';

export const fetchProducts = () => async (dispatch) => {
  const response = await apis.get('/products/v2/list');

  dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
};
