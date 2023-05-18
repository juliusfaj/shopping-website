const reducer = (state, action) => {
  if (action.type === "FILTER_PRODUCTS") {
    const newData = state.cart.filter((item) => item.id);

    console.log(newData);

    // return {
    //   ...state,
    //   cart: state.cart.filter((item) => item.id === action.payload),
    // };
  }

  return state;
};

export default reducer;
