import { createSlice } from "@reduxjs/toolkit";

const initialState = { lists: [] };

export const tracklistSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    storeTracklist: (state, action) => {
      state.lists = action.payload;
    },
    clearList: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeTracklist, clearList } = tracklistSlice.actions;

export default tracklistSlice.reducer;
