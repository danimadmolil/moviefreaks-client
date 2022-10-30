import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState = { open: false };

const drawer = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      return { open: true };
    },
    closeDrawer: (state, action) => {
      return { open: false };
    },
  },
});

export const { openDrawer, closeDrawer } = drawer.actions;

export default drawer.reducer;
