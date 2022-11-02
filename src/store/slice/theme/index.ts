import { createSlice } from "@reduxjs/toolkit";

const initialState: {} = { mode: "dark" };

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action: { payload: { mode: "dark" | "light" } }) => {
      return { mode: action.payload.mode };
    },
  },
});
export default slice.reducer;
export const { setThemeMode } = slice.actions;
