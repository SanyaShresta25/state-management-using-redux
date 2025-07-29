import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
  const res = await fetch('https://dummyjson.com/quotes');
  const data = await res.json();
  return data.quotes;
});

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: {
    quotes: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default quoteSlice.reducer;
