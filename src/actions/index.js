/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
// import history from '../history';
import api from '../api/allapi';

export const fetchProducts = () => async (dispatch) => {
  api.getData('products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=20&store=US')
    .then((response) => {
      console.log(response.data.products);
      dispatch({ type: 'FETCH_PRODUCTS', payload: response.data.products });
    });
};

export const fetchDetail = (id) => async (dispatch) => {
  // api.getData(`products/v3/detail?store=US&sizeSchema=US&lang=en-US&currency=USD&id=${id}`)
  api.getData('products/v3/detail?store=US&sizeSchema=US&lang=en-US&currency=USD&id=9851612')
    .then((response) => {
      console.log(response.data)
      dispatch({ type: 'PRODUCT_DETAIL', payload: response.data });
    });
};
