import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsReducer from "../features/NewsSlice";
import weatherReducer from "../features/WeatherSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
