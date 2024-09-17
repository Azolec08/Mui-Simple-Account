import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterTypes } from "../types/types";

const initialState: CounterTypes = {
  increment: 0,
  mode: "light",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncrement: (state) => {
      state.increment += 1;
    },
    handleDecrement: (state, action: PayloadAction<number>) => {
      state.increment = action.payload;
    },
    handleDarkMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const { handleIncrement, handleDecrement, handleDarkMode } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
