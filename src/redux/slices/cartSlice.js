import { createSlice } from '@reduxjs/toolkit';
import { getTotal } from '../../utils/getTotal';

const initialState = {
  showCart: false,
  total: 0,
  cartItems: [],
  orderItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      state.total = getTotal(state.cartItems);
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.total = getTotal(state.cartItems);
    },
    setOrderItems: (state) => {
      state.orderItems = [...state.cartItems];
      state.cartItems = [];
      state.total = getTotal(state.cartItems);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowCart, setCartItems, removeCartItem, setOrderItems } =
  cartSlice.actions;

export default cartSlice.reducer;
