const InitialState = { cart: [] };

export default (state = InitialState, action) => {
  const { cart } = state;
  switch (action.type) {
    case 'ADD_TO_CART':
      cart.push(action.payload);
      return { ...state, cart };
    default:
      return state;
  }
};
