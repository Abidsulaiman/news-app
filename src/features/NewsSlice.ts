import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface NewsState {
  loading: Boolean;
  error: any | undefined;
  data: [] | undefined;
}

const initialState: NewsState = {
  loading: false,
  error: undefined,
  data: undefined,
};

// action
export const fetchNews = createAsyncThunk(
  "news/fetch",
  async (
    payload: { searchTerm: String; lang: String },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${payload?.searchTerm}&sortBy=publishedAt&language=${payload?.lang}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      return data;
    } catch (error: any) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// slices
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchNews.pending, (state, action) => {
      state.loading = true;
    });
    // fulfilled
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.data = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    // rejected
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.data = undefined;
      state.error = action?.payload;
    });
  },
});

export default newsSlice.reducer;
