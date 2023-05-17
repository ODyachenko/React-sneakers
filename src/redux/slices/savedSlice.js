import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedItems: [],
};

export const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    setSavedItems: (state, action) => {
      state.savedItems = action.payload;
    },
    removeSavedItem: (state, action) => {
      state.savedItems = state.savedItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSavedItems, removeSavedItem } = savedSlice.actions;

export default savedSlice.reducer;
