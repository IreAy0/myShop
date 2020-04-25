export const initialState = {
  posts: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { posts: action.payload };
    default:
      return state;
  }
};
