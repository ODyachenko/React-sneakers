import { configureStore } from '@reduxjs/toolkit';
import sneakersList from './slices/sneakersList';
import cartSlice from './slices/cartSlice';
import savedSlice from './slices/savedSlice';

export const store = configureStore({
  reducer: {
    sneakers: sneakersList,
    cart: cartSlice,
    saved: savedSlice,
  },
});
