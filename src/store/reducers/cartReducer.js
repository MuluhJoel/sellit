const initialState = {
  items: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExists = state.items.some(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        return state;
      }

      const newItemsList = [...state.items, action.payload];
      return { ...state, items: newItemsList };

    case "DELETE_FROM_CART":
      const itemsAfterDeletion = state.items.filter(
        (item) => item.id !== action.id
      );
      return { ...state, items: itemsAfterDeletion };

    case "INCREASE_QUANTITY":
      const itemsAfterIncrement = state.items.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return { ...state, items: itemsAfterIncrement };

    case "DECREASE_QUANTITY":
      const itemsAfterDecrement = state.items.map((item) => {
        if (item.id === action.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return { ...state, items: itemsAfterDecrement };

    default:
      return state;
  }
}
export default cartReducer;
