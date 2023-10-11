import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    message: undefined
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) =>
          item.id === action.payload.id &&
          JSON.stringify(item.option) === JSON.stringify(action.payload.option));
      if (itemInCart) {
        if(itemInCart.quantity >= action.payload.option.quantity) {
          state.message = 'error'
        } else {
          state.itemsInCart = itemInCart.quantity++;
          state.message = 'success'
        }
      } else if(!itemInCart) {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.message = 'success'
      } else {
        state.message = undefined
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) =>
          item.id === action.payload.id &&
          JSON.stringify(item.option) === JSON.stringify(action.payload.option));
      if(action.payload.availableNumber > item.quantity) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) =>
          item.id === action.payload.id &&
          JSON.stringify(item.option) === JSON.stringify(action.payload.option));
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const itemInCart = state.cart.find((item) =>
          item.id === action.payload.id &&
          JSON.stringify(item.option) === JSON.stringify(action.payload.option));
      state.cart.pop(itemInCart);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;