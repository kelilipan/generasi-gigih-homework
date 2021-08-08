import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import playlist from "./playlist";
import tracks from "./tracklist";
export const store = configureStore({
  reducer: {
    user,
    playlist,
    tracks,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch