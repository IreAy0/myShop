const InitialState = { cart: [] };

export default (state = InitialState, action) => {
  const { cart } = state;
  switch (action.type) {
    case 'ADD_TO_CART':
      cart.push(action.payload);
      return { ...state, cart };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: cart.filter((item) => item.product.id !== action.payload.productId),
      };
    default:
      return state;
  }
};
