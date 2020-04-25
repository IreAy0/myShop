export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STREAM':
      return [...state, action.payload];

    default:
      return state;
  }
};
