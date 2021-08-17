// test-utils.jsx
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import user from "./store/user";
import playlist from "./store/playlist";
import tracks from "./store/tracklist";
import playback from "./store/playback";

const render = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        user,
        playlist,
        tracks,
        playback,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render, renderWithRouter };
