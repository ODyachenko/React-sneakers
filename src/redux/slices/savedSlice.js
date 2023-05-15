import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedItems: [],
};

export const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    setSavedItems: (state, action) => {
      state.savedItems.push(action.payload);
    },
    // removeCartItem: (state, action) => {
    //   state.cartItems = state.cartItems.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setSavedItems } = savedSlice.actions;

export default savedSlice.reducer;
