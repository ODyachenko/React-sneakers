import { createSlice } from '@reduxjs/toolkit';
import { getTotal } from '../../utils/getTotal';

const initialState = {
  showCart: false,
  total: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems.push(action.payload);
      state.total = getTotal(state.cartItems);
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.total = getTotal(state.cartItems);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowCart, setCartItems, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
