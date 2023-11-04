import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + action.payload.price,
            };
          }
          return item;
        });
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);

      if (item) {
        state.cart = state.cart
          .map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
                price: item.price - action.payload.price,
              };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
