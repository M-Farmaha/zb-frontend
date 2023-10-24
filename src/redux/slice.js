import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: null,
  reducers: {
    setToken: (state, action) => (state = action.payload),
  },
});
export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
