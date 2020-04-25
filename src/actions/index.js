/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import history from '../history';
import apis from '../api/allapi';

export const fetchProducts = () => async (dispatch) => {
  const response = await apis.getData('products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US'); // //It's working even without the parameter, so it's not doing anything
  dispatch({ type: 'FETCH_PRODUCTS', payload: response.products });
};
