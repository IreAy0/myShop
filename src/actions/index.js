/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
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

export const getProduct = () => ({ type: 'GET_PRODUCT' });
export const fetchDetail = (id) => async (dispatch) => {
  dispatch(getProduct());
  api.getData(`products/v3/detail?store=US&sizeSchema=US&lang=en-US&currency=USD&id=${id}`)
  // api.getData('products/v3/detail?store=US&sizeSchema=US&lang=en-US&currency=USD&id=9851612')
    .then((response) => {
      console.log(response.data.description);

      dispatch({ type: 'PRODUCT_DETAIL', payload: response.data });
    });
};

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: {
      product,
      quantity: 1,
    },
  });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: {
      productId,
    },
  });
};
