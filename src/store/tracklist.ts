import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TrackListState {
  lists: SpotifyApi.TrackObjectFull[] | undefined;
  currentPage: number;
  maxLength: number;
  isTopTrack: boolean;
  query?: string;
}
const initialState: TrackListState = {
  lists: [],
  currentPage: 1,
  maxLength: 1,
  isTopTrack: false,
};

export const tracklistSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    storeTracklist: (state, action: PayloadAction<TrackListState>) => {
      state.lists = action.payload.lists;
      state.query = action.payload.query;
      state.currentPage = action.payload.currentPage;
      state.maxLength = action.payload.maxLength;
      state.isTopTrack = action.payload.isTopTrack;
    },
    clearList: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeTracklist, clearList } = tracklistSlice.actions;

export default tracklistSlice.reducer;
