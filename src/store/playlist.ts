import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlaylistState {
  uris: string[];
}

const initialState: PlaylistState = {
  uris: [],
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addTrack: (state, action: PayloadAction<string>) => {
      state.uris.push(action.payload);
    },
    removeTrack: (state, action: PayloadAction<string>) => {
      state.uris = state.uris.filter((uri) => action.payload !== uri);
    },
    clearPlaylist: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTrack, removeTrack, clearPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
