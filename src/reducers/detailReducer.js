export const initialState = {
  detail: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return { ...state, loading: true };
    case 'PRODUCT_DETAIL':
      return { detail: action.payload, loading: false };
    default:
      return state;
  }
};
