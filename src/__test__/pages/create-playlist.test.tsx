import { render, screen } from "test/utils";
import CreatePlaylist from "pages/create-playlist";
import user from "test/dummy/user";
import tracks from "test/dummy/tracks";
import playlist from "test/dummy/playlist";

//mock player component
jest.mock("../../components/player/index", () => () => "PlayerComponent");

//mock matchMedia for chakra breakpoints
Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

describe("create-playlist page", () => {
  beforeEach(() => {
    render(<CreatePlaylist />, {
      preloadedState: {
        user,
        tracks,
        playlist,
        playback: {
          play: false,
        },
      },
    });
  });

  it("should have title", () => {
    const title = screen.getByText("Select tracks");
    expect(title).toBeInTheDocument();
  });

  it("should have pagination button", () => {
    const nextButton = screen.getAllByRole("button", { name: "Next page" });
    expect(nextButton).toHaveLength(2);
    const prevButton = screen.getAllByRole("button", {
      name: "Previous page",
    });
    expect(prevButton).toHaveLength(2);
  });

  it("should render a music card", () => {
    const selectTrackButton = screen.getAllByText("Selected");
    expect(selectTrackButton).toHaveLength(playlist.uris.length);
  });

  it("should render create playlist button", () => {
    const createPlaylist = screen.getByText("Create playlist");
    expect(createPlaylist).toBeVisible();
  });
});
