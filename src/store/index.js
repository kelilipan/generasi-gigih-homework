import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import playlist from "./playlist";
export const store = configureStore({
  reducer: {
    user,
    playlist,
  },
});
