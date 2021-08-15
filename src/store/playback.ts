import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlaybackState {
  play: boolean;
  uris?: string;
}
const initialState: PlaybackState = {
  play: false,
};

export const playbackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    playTrack: (state, action: PayloadAction<string>) => {
      state.play = true;
      state.uris = action.payload;
    },
    stopPlayback: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { playTrack, stopPlayback } = playbackSlice.actions;

export default playbackSlice.reducer;
