import Navbar from "components/navbar";
import { render, screen } from "test/utils";
import user from "test/dummy/user";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { SPOTIFY_API_BASE_URL } from "site.config";
import { getProfile } from "lib/spotify";

const server = setupServer(
  rest.get(`${SPOTIFY_API_BASE_URL}/me`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user.data));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("navbar component", () => {
  it("should have login button", () => {
    render(<Navbar />);
    const loginButtons = screen.getByText(/Login With Spotify/i);
    expect(loginButtons).toBeVisible();
  });
  //if logged in
  it("should have search component", () => {
    render(<Navbar />, { preloadedState: { user } });
    const searchButton = screen.getByRole("button", { name: /search song/i });
    expect(searchButton).toBeVisible();
    const searchInput = screen.getByPlaceholderText("Input song name");
    expect(searchInput).toBeVisible();
  });

  it("should have profile", async () => {
    const token = "a random token string";
    const userData = await getProfile(token);
    render(<Navbar />, {
      preloadedState: {
        user: {
          isAuthenticated: true,
          token: token,
          data: userData,
        },
      },
    });
    const profilePicture = screen.getByRole("img", {
      name: userData.display_name as string,
    });
    const displayName = screen.getByText(userData.display_name as string);

    expect(profilePicture).toBeVisible();
    expect(displayName).toBeVisible();
  });
});
