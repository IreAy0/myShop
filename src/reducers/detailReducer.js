export default (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAIL':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
