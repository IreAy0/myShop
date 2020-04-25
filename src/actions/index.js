/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
// import history from '../history';
import api from '../api/allapi';

export const fetchProducts = () => async (dispatch) => {
  api.getData('products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US')
    .then((response) => {
      dispatch({ type: 'FETCH_PRODUCTS', payload: response.data.products });
    })
};
