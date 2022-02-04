export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: {
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
      quantity: 1,
    },
  });
};
