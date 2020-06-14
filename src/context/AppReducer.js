export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSECTION":
      return {
        ...state,
        transection: state.transection.filter(
          (transection) => transection.id !== action.payload
        ),
      };
    case "ADD_TRANSECTION":
      return {
        ...state,
        transection: [action.payload, ...state.transection],
      };
    default:
      return state;
  }
};
