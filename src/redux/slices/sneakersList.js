import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSneakers = createAsyncThunk(
  'sneakers/fetchSneakers',
  async function fetchData(debouncedValue) {
    const response = await axios(
      `https://64465b720431e885f00fc24e.mockapi.io/SneakersList?${
        !!debouncedValue ? `search=${debouncedValue}` : ''
      }`
    );
    return response.data;
  }
);

const initialState = {
  sneakersList: [],
  searchValue: '',
  debouncedValue: '',
  status: 'pending' | 'fulfilled' | 'rejected',
};

export const sneakersList = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setDebounceValue: (state, action) => {
      state.debouncedValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.sneakersList = [];
      state.status = 'pending';
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.sneakersList = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.sneakersList = [];
      state.status = 'rejected';
    });
  },
});
export const { setSearchValue, setDebounceValue } = sneakersList.actions;

export default sneakersList.reducer;
