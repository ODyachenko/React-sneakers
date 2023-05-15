import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://64465b720431e885f00fc24e.mockapi.io/SneakersList';

export const fetchSneakers = createAsyncThunk(
  'sneakers/fetchSneakers',
  async function fetchData() {
    const response = await axios(URL);
    return response.data;
  }
);

const initialState = {
  sneakersList: [],
  status: 'pending' | 'fulfilled' | 'rejected',
};

export const sneakersList = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    // setTotal: (state, action) => {
    //   state.total += action.payload;
    // },
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

// Action creators are generated for each case reducer function
// export const { setTotal } = sneakersList.actions;

export default sneakersList.reducer;
