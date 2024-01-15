import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addcart(state, action) {
      const newItem = action.payload;

      // Check if the item is already in the cart
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // If it's already in the cart, update its quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          count: state.count + 1,
        };
      } else {
        // If it's not in the cart, add it with quantity 1
        return {
          ...state,
          items: [...state.items, { ...newItem, quantity: 1 }],
          count: state.count + 1,
        };
      }
    },
    removecart(state, action) {
      const itemIdToRemove = action.payload;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== itemIdToRemove),
        count: state.count - 1,
      };
    },
  },
});

export const { addcart, removecart } = cartSlice.actions;
export default cartSlice.reducer;
