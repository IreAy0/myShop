const InitialState = { items: [] };

export default (state = InitialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { items: action.payload.cartItems };
    default:
      return state;
  }
};
