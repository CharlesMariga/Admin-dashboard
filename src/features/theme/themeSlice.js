import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {},
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setMode, setColor } = themeSlice.actions;

export const selectMode = (state) => state.theme.mode;
export const selectColor = (state) => state.theme.color;

export default themeSlice.reducer;
