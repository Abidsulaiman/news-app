import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface WeatherState {
  loading: Boolean;
  error: any | undefined;
  data: [] | undefined;
}

const initialState: WeatherState = {
  loading: false,
  error: undefined,
  data: undefined,
};

// action
export const fetchWeather = createAsyncThunk(
  "weather/fetch",
  async (
    payload: { city: String },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload?.city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
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
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.loading = true;
    });
    // fulfilled
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.data = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    // rejected
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.loading = false;
      state.data = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
