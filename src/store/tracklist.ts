import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TrackListState {
  lists: SpotifyApi.TrackObjectFull[] | undefined;
}
const initialState: TrackListState = { lists: [] };

export const tracklistSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    storeTracklist: (
      state,
      action: PayloadAction<SpotifyApi.TrackObjectFull[] | undefined>
    ) => {
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
